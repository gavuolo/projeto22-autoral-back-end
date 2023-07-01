import { Router } from 'express';
// import { authenticateToken } from '@/middlewares'
import { validateBody } from '@/middlewares/validation-middleware';
import { loginSchema } from '@/schemas/sign-in-schema';
import { getSignIn, signIn } from '@/controllers';
import { authenticateToken } from '@/middlewares/authentication-middleware';

const loginRouter = Router();

loginRouter.post('/', validateBody(loginSchema), signIn)
loginRouter.get('/', authenticateToken, getSignIn)
export { loginRouter };