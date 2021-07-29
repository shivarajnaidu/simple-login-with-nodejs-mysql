import express from 'express';
import * as controller from '../controllers/users.js';

const router = express.Router();

router.route('/')
    .get(controller.getUsers)
    .post(controller.createUser);

router.route('/:id')
    .get(controller.getUserById)
    .put(controller.updateUserById)
    .delete(controller.deleteById);

export const userRouter = router;