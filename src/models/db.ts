import { Database, OPEN_READWRITE } from 'sqlite3';

const db = new Database('src/db/database.sqlite', OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL UNIQUE
    )
`);

export default db;