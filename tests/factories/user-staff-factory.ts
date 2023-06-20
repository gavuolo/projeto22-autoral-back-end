import prisma from "../../src/config/database";
import { User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import moment from 'moment';
const fakerbr = require('faker-br');

export async function createUserStaff(speciality: number, userId: number){
    const name = faker.lorem.words()
    const socialName = faker.lorem.word()
    const cpf = fakerbr.br.cpf()
    const gender = faker.lorem.words()
    const phone = faker.lorem.words(2).substring(11)
    const birthday = "29/06/1996"
    const isoFormattedBirthday = moment(birthday, 'DD/MM/YYYY').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const profession = faker.lorem.word()
    const council = faker.lorem.word()
    const councilRegistration = faker.lorem.word()
    const councilState = "3ª Região"
    return await prisma.userStaff.create({
        data:{
            name,
            socialName,
            cpf,
            phone,
            birthday: isoFormattedBirthday,
            profession,
            council,
            councilRegistration,
            councilState,
            gender,
            Speciality: {
                connect: { id: speciality },
            },
            User: {
                connect: { id: userId },
            },
        }
    });
}
export async function createSpeciality(){
    const name = faker.lorem.words({min: 1, max: 4})
    return await prisma.speciality.create({
        data: {
            name
        }
    })
}
