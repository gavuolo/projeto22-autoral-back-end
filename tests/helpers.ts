import prisma from "../src/config/database";

export async function cleanDb() {
  await prisma.session.deleteMany({})
  await prisma.userStaff.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.speciality.deleteMany({})
}