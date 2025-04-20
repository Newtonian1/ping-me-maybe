import express from 'express'
import dotenv from 'dotenv'

const app = express();

dotenv.config();

//attach incoming json to req.body for access
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world");
});

export default app;