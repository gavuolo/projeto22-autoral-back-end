import { Prisma, User, UserStaff } from "@prisma/client";
import prisma from "../config/database";
import { UserStaffType } from "@/protocols";
import { format } from "date-fns";
import moment from "moment";

async function createUserStaff(userId: number, staffForm: UserStaffType) {
  const { specialityId, ...data } = staffForm;
  const updateFormat = staffForm.birthday;
  const isoFormattedBirthday = moment(updateFormat, "DD-MM-YYYY").format(
    "YYYY-MM-DDTHH:mm:ss.SSSZ"
  );
  //refact
  return await prisma.userStaff.create({
    data: {
      ...data,
      birthday: isoFormattedBirthday,
      User: {
        connect: { id: userId },
      },
      Speciality: {
        connect: { id: specialityId },
      },
    } as Prisma.UserStaffCreateInput,
  });
}
async function updateUserStaff(userStaffId: number, staffForm: UserStaffType) {
  const { birthday, ...data } = staffForm;
  return await prisma.userStaff.update({
    where: {
      id: userStaffId,
    },
    data: {
      ...data
    }
  });
}
async function findSpecialityById(specialityId: number) {
  return await prisma.speciality.findFirst({
    where: {
      id: specialityId,
    },
  });
}
async function findCpfCreated(cpf: string){
  return prisma.userStaff.findFirst({
    where:{
      cpf
    }
  })
}
async function findCouncilRegistration(councilRegistration: string){
  return await prisma.userStaff.findFirst({
    where:{
      councilRegistration,
    }
  })
}
async function findUserStaffById(userId: number) {
  return prisma.userStaff.findFirst({
    where: {
      userId,
    },
  });
}
async function createSpeciality(name: string) {
  return await prisma.speciality.create({ data: { name } });
}
async function findSpecialityByName(name: string) {
  return await prisma.speciality.findFirst({
    where: {
      name,
    },
  });
}

const staffRepository = {
  createUserStaff,
  createSpeciality,
  findSpecialityByName,
  findUserStaffById,
  findSpecialityById,
  updateUserStaff,
  findCpfCreated,
  findCouncilRegistration,
};

export default staffRepository;
