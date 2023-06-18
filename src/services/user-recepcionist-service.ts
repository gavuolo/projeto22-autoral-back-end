import { cpfAlreadyExist } from "@/errors/cpf-already-exist";
import { userAlreadyRegistered } from "@/errors/user-already-registered";
import { UserRecepcionistType } from "@/protocols";
import recepcionistRepository from "@/repositories/user-recepcionist-repository";
import { UserRecepcionist } from "@prisma/client";

export async function recepcionistPost(userForms: UserRecepcionistType, userId: number): Promise<UserRecepcionist> {

    //verificar se cpf já foi cadastrado
    await searchCpf(userForms.cpf)
    //verificar se já existe cadastro finalizado com este usuário
    await findUserRecepcionistfById(userId)
    const response = recepcionistRepository.createUserRecepcionist(userForms, userId)
    return response
}

async function searchCpf(cpf: string) {
    const cpfExist = await recepcionistRepository.findCpfCreated(cpf)
    if (cpfExist) {
        throw cpfAlreadyExist()
    }
}

async function findUserRecepcionistfById(userId: number) {
    const registerExist = await recepcionistRepository.findUserRecepcionistById(userId)
    if (registerExist) {
        throw userAlreadyRegistered()
    }
}