import { Prisma, User, UserStaff } from "@prisma/client";
import prisma from "../config/database";
import { UserRecepcionistType } from "@/protocols";
import moment from "moment";

async function createUserRecepcionist(userForms: UserRecepcionistType, userId: number) {
    const { birthday, ...data } = userForms;
    const isoFormattedBirthday = moment(birthday, "DD-MM-YYYY").format(
        "YYYY-MM-DDTHH:mm:ss.SSSZ");

    //refact
    return await prisma.userRecepcionist.create({
        data: {
            ...data,
            birthday: isoFormattedBirthday,
            User: {
                connect: { id: userId },
            },
        } as Prisma.UserRecepcionistCreateInput
    });
}


async function findCpfCreated(cpf: string) {
    return prisma.userRecepcionist.findFirst({
        where: {
            cpf
        }
    })
}

async function findUserRecepcionistById(userId: number) {
    return prisma.userRecepcionist.findFirst({
        where: {
            userId,
        },
    });
}


const recepcionistRepository = {
    findCpfCreated,
    findUserRecepcionistById,
    createUserRecepcionist,
};

export default recepcionistRepository;