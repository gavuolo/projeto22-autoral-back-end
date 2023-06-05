import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt";

export async function createUser(
  email: string,
  password: string,
  userType: string
) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return await userRepository.create(
    email,
    hashedPassword,
    userType,
  );
}

export default { createUser };
