import { invalidLoginInformation } from '@/errors/invalid-login-information';
import { unauthorizedError } from '@/errors/unauthorized-error';
import { SignInType } from '@/protocols';
import userRepository from '@/repositories/user-repository';

async function logOutService(token: string, userId: number) {
    await userRepository.findUserById(userId)
    const sessionDelete = await userRepository.deleteSession(token)
    return sessionDelete
}

export default { logOutService }