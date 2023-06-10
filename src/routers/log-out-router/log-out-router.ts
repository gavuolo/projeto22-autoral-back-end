import { Router } from 'express';
// import { authenticateToken } from '@/middlewares'
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { logOut } from '@/controllers/log-out-controller/log-out-controller';

const logOutRouter = Router();
logOutRouter.all('*', authenticateToken)
logOutRouter.delete('/', logOut)

export { logOutRouter };