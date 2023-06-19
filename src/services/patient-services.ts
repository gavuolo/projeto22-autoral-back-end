import { invalidLoginInformation } from '@/errors/invalid-login-information';
import { unauthorizedError } from '@/errors/unauthorized-error';
import { MedicalRecordType, PatientAddresType, SignInType } from '@/protocols';
import patientRepository from '@/repositories/patient-repository';
import userRepository from '@/repositories/user-repository';
import { Address, Patient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function newMedicalRecord(medicalRecord: Patient, userId: number) {
   const response = await patientRepository.createPatient(medicalRecord, userId)
   console.log(response)
   return response
}

export async function patienteAddressPost(addressForm: PatientAddresType, userId: number){
   const response = await patientRepository.createAddress(addressForm, userId)
   return response
}
