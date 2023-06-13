import { User } from "@prisma/client";

export type CreateUserBody = {
  email: string;
  password: string;
  confirmPassword: string;
  userType?: string;
};

export type ApplicationError = {
  name: string;
  message: string;
};

export type JWTPayLoad = {
  userId: number;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type SignInType = {
  id: number;
  email: string;
  userType: string;
  token: string;
};

export type UserStaffType ={
  specialityId?: number;
  userId: number;
  councilState: string;
  councilRegistration: number;
  council: string;
  profession: string;
  birthday: Date;
  phone: string;
  cpf: string;
  gender: string;
  socialName?: string;
  name: string;
}



  
          
