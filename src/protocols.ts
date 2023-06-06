
export type CreateUserBody = {
    email: string,
    password: string
    confirmPassword: string,
    userType?: string,
}

export type ApplicationError = {
    name: string;
    message: string;
  };