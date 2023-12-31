import sqlite3 from 'sqlite3';

export default class Database {
    private db: sqlite3.Database | null = null;

    constructor(private fileName: string, private config?: any) {
    }

    getDatabase() {
        if (!this.db) {
            this.createDatabase();
            return this.db;
        } else {
            return this.db;
        }
    }

    private createDatabase() {
        this.db = new sqlite3.Database(this.fileName, (err) => {
            if (err) {
                console.log('Something went wrong when creating database', err.message);
            } else {
                console.log('Database created');
            }
        });

    }
}




// sqlite3.verbose();
// const Database = new sqlite3.Database('example.db', (err) => {
//     if (err) {
//         console.error('Database connection error:', err.message);
//     } else {
//         console.log('Connected to the database.');
//     }
// });
