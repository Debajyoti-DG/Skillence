// This script is for setting up your LOCAL database for testing.
// Production database is managed by Render.
const { Pool } = require('pg');
require('dotenv').config(); // Use dotenv for local credentials

// Make sure you have a .env file locally with your database URL
// Example: DATABASE_URL="postgres://user:password@localhost:5432/mydatabase"
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    job_role VARCHAR(255) NOT NULL,
    resume_url TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

async function setupDatabase() {
  const client = await pool.connect();
  try {
    await client.query(createTableQuery);
    console.log("Successfully created 'applications' table.");
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    client.release();
    pool.end();
  }
}

setupDatabase();