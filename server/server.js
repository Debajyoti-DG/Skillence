const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(express.json());

// Set up multer for PDF uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed!'), false);
        }
    }
});

// Ensure uploads folder exists
const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// API Endpoint to handle contact form submission with file upload
app.post('/api/contact', upload.single('resume'), (req, res) => {
    const { name, email, jobRole, description } = req.body;
    const resume = req.file ? req.file.path : null;

    if (!name || !email || !jobRole || !description || !resume) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const sql = `INSERT INTO contacts (name, email, jobRole, description, resume) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [name, email, jobRole, description, resume], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Failed to save message.' });
        }
        res.status(201).json({ message: 'Message received!', id: this.lastID });
    });
});

app.listen(PORT, () => {
    console.log(`✨ Server running on http://localhost:${PORT}`);
});