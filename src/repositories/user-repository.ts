import { Prisma } from "@prisma/client";
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
const userRepository = {
  create,
  findEmail,
  createSession,
};

export default userRepository;
