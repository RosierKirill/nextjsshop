import {verbose} from "sqlite3";

const sqlite3 = verbose();

const db = new sqlite3.Database('./my-database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT
  )`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Created items table.');
    });
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Closed the database connection.');
});