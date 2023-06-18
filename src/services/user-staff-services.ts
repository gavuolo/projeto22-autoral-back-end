import { conflictError, notFoundError } from "@/errors";
import { councilRegistrationAlreadyExist } from "@/errors/council-registration-already-exist";
import { cpfAlreadyExist } from "@/errors/cpf-already-exist";
import { userAlreadyRegistered } from "@/errors/user-already-registered";
import { UserStaffType } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import staffRepository from "@/repositories/user-staff-repository";
import { Speciality, UserStaff } from "@prisma/client";
import { format } from "date-fns";

export async function userStaffRegister(
  userId: number,
  staffForm: UserStaffType
) {
  //verificar se já existe cadastro finalizado com este usuário
  await findUserStaffById(userId)
  //Verificar o userType
  await compareUserType(userId)
  //verificar se cpf já foi cadastrado
  await searchCpf(staffForm.cpf)
  //verificar se conselho no registro foi cadastrado
  await seatchCouncilRegistration(staffForm.councilRegistration)
  
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
async function compareUserType(userId: number){
  const user = await userRepository.findUserById(userId)
  if(user.userType === "Recepcionista"){
      throw conflictError
  }
}
async function findUserStaffById(userId:number){
  const registerExist = await staffRepository.findUserStaffById(userId)
  if(registerExist){
    throw userAlreadyRegistered()
  }
}
async function searchCpf(cpf: string){
  const cpfExist = await staffRepository.findCpfCreated(cpf)
  if(cpfExist){
    throw cpfAlreadyExist()
  }
}
async function seatchCouncilRegistration(councilRegistration: string){
  const councilRegistrationExist = await staffRepository.findCouncilRegistration(councilRegistration)
  if(councilRegistrationExist){
    throw councilRegistrationAlreadyExist()
  }
}
async function searchSpeciality(name: string) {
  const speciality = await staffRepository.findSpecialityByName(name);
  if (speciality) {
    return speciality;
  }
}