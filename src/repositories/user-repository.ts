import { Prisma, User } from "@prisma/client";
import prisma from "../config/database";

async function create(email: string, hashedPassword: string, userType: string) {
  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      userType,
    },
  });
}
async function findEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
}
async function createSession(token: string, userId: number){
  return prisma.session.create({
    data: {
      token, userId
    }
  })
}
async function findUserById(userId: number){
  return prisma.user.findFirst({
    where:{
      id: userId,
    }
  })
}
async function deleteSession(token: string){
  return prisma.session.deleteMany({
    where:{
      token: token,
    }
  })
}
const userRepository = {
  create,
  findEmail,
  createSession,
  findUserById,
  deleteSession,
};

export default userRepository;
