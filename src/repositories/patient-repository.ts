import { Address, Patient, Prisma } from "@prisma/client";
import prisma from "../config/database";
import moment from "moment";
import { MedicalRecordType, PatientAddresType } from "@/protocols";

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
        userCreateId: userId
    },
  });
}

async function createAddress(addressForm: PatientAddresType, userId: number){
    return prisma.address.create({
        data:{
            ...addressForm,
            userCreateId: userId
        }
    })
}
const patientRepository = {
    createPatient,
    createAddress
  };
  
  export default patientRepository;