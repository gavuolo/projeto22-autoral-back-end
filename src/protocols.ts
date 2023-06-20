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

export type UserStaffType = {
  specialityId?: number;
  userId: number;
  councilState: string;
  councilRegistration: string;
  council: string;
  profession: string;
  birthday: Date;
  phone: string;
  cpf: string;
  gender: string;
  socialName?: string;
  name: string;
}

export type UserRecepcionistType = {
  name: string;
  socialName?: string;
  gender: string;
  cpf: string;
  phone: string;
  birthday: Date;
}

export type MedicalRecordType = {
  name: string,
  socialName?: string,
  phone: string,
  cpf: string,
  rg: number,
  gender: string,
  birthday: Date,
  maritalStatus?: string,
  birthPlace: string,
  nationality: string,
  email: string,
  schooling: string,
  occupation?: string,
  observation?: string,
  responsibleId?: number,
  addressId: number
}

export type PatientAddresType ={
  cep: string;
  street: string;
  city: string;
  number: number;
  state: string;
  neighborhood: string;
  addressDetail?: string;
}

export type ResponsiblePersonType={
    name: string;
    socialName?: string;
    relationship: string;
    cpf: string;
    phone: string;
    rg?: string;
    birthday: Date;
    gender: string;
    email: string;
    observation?: string;
    schooling: string;
    occupation?: string;
}
