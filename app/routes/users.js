import express from 'express';
import { createUser } from '../controllers/users.js';

const router = express.Router();

router.route('/')
    .post(createUser);

export const userRouter = router;