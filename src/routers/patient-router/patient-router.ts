import { Router } from 'express';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { createMedicalRecord, createPatientAddress } from '@/controllers';
import { validateBody } from '@/middlewares';
import { createMedicalRecordSchema, createPatientAddressSchema } from '@/schemas/patient-schema';

const patientRouter = Router();
patientRouter.all('*', authenticateToken)
patientRouter.post('/create', validateBody(createMedicalRecordSchema), createMedicalRecord)
patientRouter.post('/create/address', validateBody(createPatientAddressSchema), createPatientAddress)
// patientRouter.patch('/update');
// patientRouter.delete('/delete');

export { patientRouter };