import { conflictError } from "@/errors";
import { cpfAlreadyExist } from "@/errors/cpf-already-exist";
import { incompleteRegistrationError } from "@/errors/incomplete-registration-error";
import { userAlreadyRegistered } from "@/errors/user-already-registered";
import { UserRecepcionistType } from "@/protocols";
import recepcionistRepository from "@/repositories/user-recepcionist-repository";
import userRepository from "@/repositories/user-repository";

import { UserRecepcionist } from "@prisma/client";

export async function recepcionistPost(userForms: UserRecepcionistType, userId: number): Promise<UserRecepcionist> {
    //verificar se já existe cadastro finalizado com este usuário
    await findUserRecepcionistfById(userId)
    //tem q verificar se o usuário é do type "recepcionista"
    await compareUserType(userId)
    //verificar se cpf já foi cadastrado
    await searchCpf(userForms.cpf)
    
    const response = recepcionistRepository.createUserRecepcionist(userForms, userId)
    return response
}
export async function findUserRecepcionist(userId: number){
    const response = await recepcionistRepository.findUserRecepcionistById(userId)
    if(!response){
      throw incompleteRegistrationError()
    }
    return response
  }
async function searchCpf(cpf: string) {
    const cpfExist = await recepcionistRepository.findCpfCreated(cpf)
    if (cpfExist) {
        throw cpfAlreadyExist()
    }
}
async function compareUserType(userId: number){
    const user = await userRepository.findUserById(userId)
    if(user.userType === "Profissional da Saúde"){
        throw conflictError
    }
}
async function findUserRecepcionistfById(userId: number) {
    const registerExist = await recepcionistRepository.findUserRecepcionistById(userId)
    if (registerExist) {
        throw userAlreadyRegistered()
    }
}