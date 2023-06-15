import { Router } from 'express';
// import { authenticateToken } from '@/middlewares'
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { logOut } from '@/controllers';

const logOutRouter = Router();
logOutRouter.all('*', authenticateToken)
logOutRouter.delete('', logOut)

export { logOutRouter };