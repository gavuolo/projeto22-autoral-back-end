import { Router } from 'express';
// import { authenticateToken } from '@/middlewares';
import { userPost } from '@/controllers';
import { createUserSchema } from '@/schemas/sign-up-schema';
import { validateBody } from '@/middlewares/validation-middleware';

const userRouter = Router();

userRouter.post('', validateBody(createUserSchema), userPost)

export { userRouter };