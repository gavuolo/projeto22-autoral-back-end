import { Router } from 'express';
// import { authenticateToken } from '@/middlewares';
import { userPost } from '@/controllers';

const userRouter = Router();

userRouter.post('', userPost)

export { userRouter };