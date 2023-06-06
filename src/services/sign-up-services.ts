import { CreateUserBody } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { differentPasswordError } from "@/errors";
import { duplicatedEmailError } from "../errors/duplicate-email-error";

export async function createUser({
  email,
  password,
  userType,
  confirmPassword,
}: CreateUserBody): Promise<User> {

  await validateEmail(email)
  await validatePassword(password, confirmPassword)

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await userRepository.create(email, hashedPassword, userType);
  console.log(user);
  return user;
}

async function validateEmail(email: string) {
  const userEmailExist = await userRepository.findEmail(email);
  if (userEmailExist) {
    throw duplicatedEmailError();
  }
}
async function validatePassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    throw differentPasswordError();
  }
}

export default { createUser };
