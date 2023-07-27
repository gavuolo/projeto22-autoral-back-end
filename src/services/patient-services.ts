import { invalidLoginInformation } from '@/errors/invalid-login-information';
import { unauthorizedError } from '@/errors/unauthorized-error';
import { MedicalRecordType, PatientAddresType, ResponsiblePersonType, SignInType } from '@/protocols';
import patientRepository from '@/repositories/patient-repository';
import userRepository from '@/repositories/user-repository';
import { Address, Patient, ResponsiblePerson } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function newMedicalRecord(medicalRecord: Patient, userId: number) {
   return await patientRepository.createPatient(medicalRecord, userId)
}

export async function patienteAddressPost(addressForm: PatientAddresType, userId: number){
   return await patientRepository.createAddress(addressForm, userId)
}

export async function responsiblePersonPost(responsibleForm: ResponsiblePersonType, userId: number){
   return await patientRepository.createResponsiblePerson(responsibleForm, userId)
} 
