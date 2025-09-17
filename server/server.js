const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Pool } = require('pg');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// --- Configuration ---
const app = express();
const PORT = process.env.PORT || 3001;

// Configure Cloudinary using environment variables
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure PostgreSQL connection
// Render provides the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for Render connections
  }
});

// --- Middleware ---
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(express.json());

// Configure Multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// --- Helper function for Cloudinary Upload ---
let uploadFromBuffer = (req) => {
    return new Promise((resolve, reject) => {
      let cld_upload_stream = cloudinary.uploader.upload_stream(
        { folder: "resumes" },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
    });
};

// --- API Routes ---

// FIX 1: Add a root GET route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Skillence backend is running!');
});

// FIX 2: Update the apply route for PostgreSQL and Cloudinary
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Resume file is required.' });
  }

  try {
    // Step 1: Upload file to Cloudinary
    const uploadResult = await uploadFromBuffer(req);
    const resumeUrl = uploadResult.secure_url;

    // Step 2: Save application details to PostgreSQL
    const { name, email, jobRole, description } = req.body; 
const sql = `
  INSERT INTO applications (name, email, job_role, resume_url, description) 
  VALUES ($1, $2, $3, $4, $5) RETURNING id; -- Added description and $5
`;
// ADD description to the values array
const values = [name, email, jobRole, resumeUrl, description]; 

const dbResult = await pool.query(sql, values);
    
    res.status(201).json({ 
      success: true, 
      message: 'Application submitted successfully!',
      id: dbResult.rows[0].id 
    });

  } catch (error) {
    console.error('Error during application submission:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});