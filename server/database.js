// This script initializes the database. Run `node database.js` once.
const sqlite3 = require('sqlite3').verbose();

// Create a new database file named 'database.db'
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Create the 'contacts' table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        jobRole TEXT NOT NULL,
        description TEXT NOT NULL,
        resume TEXT NOT NULL, -- stores file path
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successfully created 'contacts' table.");
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});