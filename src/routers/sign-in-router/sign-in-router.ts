import { Router } from 'express';
// import { authenticateToken } from '@/middlewares'
import { validateBody } from '@/middlewares/validation-middleware';
import { loginSchema } from '@/schemas/sign-in-schema';
import { signIn } from '@/controllers';

const loginRouter = Router();

loginRouter.post('/', validateBody(loginSchema), signIn)

export { loginRouter };