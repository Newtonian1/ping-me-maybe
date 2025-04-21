import { Router } from "express";
import { createUser } from "../controllers/userController";

const userRouter = Router();

//Create a new user
userRouter.post('/', createUser);

//Get a user by id
userRouter.get('/:id', (req, res) => {
    res.send("Retrieved user with id: " + req.params.id);
});

export default userRouter;