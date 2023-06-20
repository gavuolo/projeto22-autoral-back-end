import { invalidLoginInformation } from '@/errors/invalid-login-information';
import { unauthorizedError } from '@/errors/unauthorized-error';
import { MedicalRecordType, PatientAddresType, ResponsiblePersonType, SignInType } from '@/protocols';
import patientRepository from '@/repositories/patient-repository';
import userRepository from '@/repositories/user-repository';
import { Address, Patient, ResponsiblePerson } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function newMedicalRecord(medicalRecord: Patient, userId: number) {
   const response = await patientRepository.createPatient(medicalRecord, userId)
   return response
}

export async function patienteAddressPost(addressForm: PatientAddresType, userId: number){
   const response = await patientRepository.createAddress(addressForm, userId)
   return response
}

export async function responsiblePersonPost(responsibleForm: ResponsiblePersonType, userId: number){
    const response = await patientRepository.createResponsiblePerson(responsibleForm, userId)
   console.log("criei ou não criei caralho?", response)
   return response
} 
