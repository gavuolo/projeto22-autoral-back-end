import { Router } from 'express';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { createMedicalRecord, createPatientAddress, createResponsiblePerson } from '@/controllers';
import { validateBody } from '@/middlewares';
import { createMedicalRecordSchema, createPatientAddressSchema, createResponsiblePersonSchema } from '@/schemas/patient-schema';

const patientRouter = Router();
patientRouter.all('*', authenticateToken)
patientRouter.post('/create', validateBody(createMedicalRecordSchema), createMedicalRecord)
patientRouter.post('/create/address', validateBody(createPatientAddressSchema), createPatientAddress)
patientRouter.post('/create/responsible-person', validateBody(createResponsiblePersonSchema), createResponsiblePerson)
// patientRouter.get('/find');
// patientRouter.patch('/update');
// patientRouter.delete('/delete');

export { patientRouter };