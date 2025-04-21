import db from "./db";

export function insertUser(username: string) {
    const stmt = db.prepare(`
        INSERT INTO users (username) VALUES (?)
    `);
    const result = stmt.run(username);

    return {
        username,
    };
}