import { RequestHandler } from 'express';
import { insertUser } from '../models/userModel';

export const createUser: RequestHandler = (req, res) => {
    if (!req.body || !req.body.username) {
        res.status(400).json({ error: "Username is required" });
        return;
    }
    const newUser = insertUser(req.body.username);
    // need to gracefully handle duplicate username submissions
    res.status(201).json(newUser);
}