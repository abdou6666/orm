import sqlite3 from 'sqlite3';

sqlite3.verbose();
const Database = new sqlite3.Database('example.db', (err) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to the database.');
    }
});


export default Database;