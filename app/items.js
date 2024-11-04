import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
    return open({
        filename: './my-database.db',
        driver: sqlite3.Database
    });
}

export default async function handler(req, res) {
    const db = await openDb();
    const items = await db.all('SELECT * FROM items');
    res.status(200).json(items);
}