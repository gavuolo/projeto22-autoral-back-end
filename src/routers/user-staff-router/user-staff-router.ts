import { Router } from 'express';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { userStaffCreate } from '@/controllers';
import { validateBody } from '@/middlewares';
import { createUserStaffSchema } from '@/schemas/user-staff-schema';

const staffRouter = Router();
// staffRouter.all('*', authenticateToken)
staffRouter.post('/user', validateBody(createUserStaffSchema), userStaffCreate)

export { staffRouter };