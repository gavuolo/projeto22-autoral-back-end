import { Router } from 'express';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { createPatient } from '@/controllers';

const patientRouter = Router();
patientRouter.all('*', authenticateToken)
patientRouter.post('/create', createPatient)
// patientRouter.patch('/update');
// patientRouter.delete('/delete');

export { patientRouter };