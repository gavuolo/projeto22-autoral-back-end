import { notFoundError } from "@/errors";
import { UserStaffType } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import staffRepository from "@/repositories/user-staff-repository";
import { Speciality, UserStaff } from "@prisma/client";
import { format } from "date-fns";

export async function userStaffRegister(
  userId: number,
  staffForm: UserStaffType
) {
  // const registerExist = await staffRepository.findUserStaffById(userId)
  // if(registerExist){
  //   const userStaffId = registerExist.id
  //   const userStaffUpdated = await staffRepository.updateUserStaff(userStaffId, staffForm)
  //   return userStaffUpdated
  // }
  const userStaffCreated = await staffRepository.createUserStaff(
    userId,
    staffForm
  );
  return userStaffCreated;
}

export async function updateRegister(userId: number, staffForm: UserStaffType) {
  const registerExist = await staffRepository.findUserStaffById(userId);
  if (registerExist) {
    const userStaffId = registerExist.id;
    const userStaffUpdated = await staffRepository.updateUserStaff(
      userStaffId,
      staffForm
    );
    return userStaffUpdated;
  }
  throw new Error("ESTE USUÁRIO NÃO TEM REGISTRO");
}

export async function specialityCreate(name: string): Promise<Speciality> {
  const specialityExist = await searchSpeciality(name);
  if (specialityExist) {
    return specialityExist;
  }
  const speciality = await staffRepository.createSpeciality(name);
  return speciality;
}

async function searchSpeciality(name: string) {
  const speciality = await staffRepository.findSpecialityByName(name);
  if (speciality) {
    return speciality;
  }
}
