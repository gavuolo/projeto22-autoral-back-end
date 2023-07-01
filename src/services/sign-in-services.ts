import { invalidLoginInformation } from '@/errors/invalid-login-information';
import { SignInType } from '@/protocols';
import userRepository from '@/repositories/user-repository';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function sessionPost(email: string, password: string): Promise<SignInType> {
    const user = await findEmail(email)
    
    await validatePassword(password, user.password)
    const token = await session(user.id, user)    
    const response = {
        id: user.id,
        email: user.email,
        userType: user.userType,
        token
    }
    return response
}
async function getUser(userId: number){
    const user = await userRepository.findUserById(userId)
    return user
}
async function findEmail(email: string){
    const emailExist = await userRepository.findEmail(email);
    if(!emailExist){
        throw invalidLoginInformation()
    }
    return emailExist
}
async function session(userId: number, user: User){
    const token = jwt.sign({ userId, userType: user.userType}, process.env.JWT_SECRET)
    await userRepository.createSession(token, userId)
    return token
}
async function validatePassword(password: string, userPassword: string){
    const passwordValidation = await bcrypt.compare(password, userPassword)
    if(!passwordValidation){
       throw invalidLoginInformation()
    }
}

export default { sessionPost, getUser }