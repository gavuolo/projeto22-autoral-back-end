import { invalidLoginInformation } from '@/errors/invalid-login-information';
import { unauthorizedError } from '@/errors/unauthorized-error';
import { SignInType } from '@/protocols';
import userRepository from '@/repositories/user-repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function logOutService(token: string, userId: number) {
    const userConfirmed = await userRepository.findUserById(userId)
    if(!userConfirmed){
        throw new Error("COMO QUE ENTROU AQUI???? N ERA PRA ENTRAR AQUI NÃO")
    }
    const sessionDelete = await userRepository.deleteSession(token)
    return sessionDelete
}

export default { logOutService }