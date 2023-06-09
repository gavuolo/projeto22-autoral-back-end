import { Router } from 'express';
// import { authenticateToken } from '@/middlewares'
import { logOut } from '@/controllers';
import { authenticateToken } from '@/middlewares/authentication-middleware';

const logOutRouter = Router();
logOutRouter.all('*', authenticateToken)
logOutRouter.delete('/', logOut)

export { logOutRouter };