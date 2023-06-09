import prisma from "../../src/config/database";
import { User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export async function createUser(email: string , password: string, userType: string){
    const hashedPassword = await bcrypt.hash(password, 10)
    return await prisma.user.create({
        data:{
            email: email || faker.internet.email(),
            password: hashedPassword,
            userType,
        }
    });
}