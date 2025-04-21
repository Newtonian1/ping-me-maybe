import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes';

const app = express();

dotenv.config();

//attach incoming json to req.body for access
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.use('/user', userRouter);

export default app;