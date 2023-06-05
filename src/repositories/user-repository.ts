import { Prisma } from '@prisma/client';
import prisma from '../config/database'

async function create(email: string, password: string, userType: string){
    return await prisma.user.create({
        data:{
            email, password, userType
        }
    })
}

const userRepository ={
    create
}

export default userRepository