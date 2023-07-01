import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import { MedicalRecordType, PatientAddresType, ResponsiblePersonType } from "@/protocols";
import { NextFunction, Request, Response } from "express";
import {
  newMedicalRecord,
  patienteAddressPost,
  responsiblePersonPost,
} from "@/services/patient-services";
import httpStatus from "http-status";
import { Address, Patient, ResponsiblePerson } from "@prisma/client";

export async function createMedicalRecord(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const { userId } = req;
  const medicalRecord = req.body as Patient;
  try {
    const response = await newMedicalRecord(medicalRecord, userId);
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    next(error);
  }
}

export async function createPatientAddress(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const { userId } = req;
  const addressForm = req.body as PatientAddresType;
  try {
    const response = await patienteAddressPost(addressForm, userId);
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}

export async function createResponsiblePerson(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const responsibleForm = req.body as ResponsiblePersonType;
  console.log(responsibleForm)
  const { userId } = req
  try{
    const response = await responsiblePersonPost(responsibleForm, userId)
    return res.send(response)
  }catch (error){
    return console.log(error.message)
    // next(error)
  }
}
