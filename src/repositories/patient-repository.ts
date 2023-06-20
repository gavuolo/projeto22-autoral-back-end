import { Address, Patient, Prisma, ResponsiblePerson } from "@prisma/client";
import prisma from "../config/database";
import moment from "moment";
import {
  MedicalRecordType,
  PatientAddresType,
  ResponsiblePersonType,
} from "@/protocols";

async function createPatient(medicalRecord: Patient, userId: number) {
  const { birthday, ...data } = medicalRecord;
  const isoFormattedBirthday = moment(birthday, "DD-MM-YYYY").format(
    "YYYY-MM-DDTHH:mm:ss.SSSZ"
  );
  //refact
  return await prisma.patient.create({
    data: {
      ...data,
      birthday: isoFormattedBirthday,
      userCreateId: userId,
    },
  });
}

async function createAddress(addressForm: PatientAddresType, userId: number) {
  return prisma.address.create({
    data: {
      ...addressForm,
      userCreateId: userId,
    },
  });
}
async function createResponsiblePerson(responsibleForm: ResponsiblePersonType,userId: number) {
  const {
    name,
    socialName,
    relationship,
    cpf,
    phone,
    rg,
    birthday,
    gender,
    email,
    observation,
    schooling,
    occupation,
  } = responsibleForm;
  const isoFormattedBirthday = moment(birthday, "DD-MM-YYYY").format(
    "YYYY-MM-DDTHH:mm:ss.SSSZ"
  );
  return prisma.responsiblePerson.create({
    data: {
      name,
      socialName,
      relationship,
      cpf,
      phone,
      rg,
      birthday: isoFormattedBirthday,
      gender,
      email,
      observation,
      schooling,
      occupation,
    },
  });
}
const patientRepository = {
  createPatient,
  createAddress,
  createResponsiblePerson,
};

export default patientRepository;
