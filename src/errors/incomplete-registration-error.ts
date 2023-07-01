import { ApplicationError } from "@/protocols";

export function incompleteRegistrationError(): ApplicationError {
    return {
      name: 'incompleteRegistrationError',
      message: 'Usuário ainda não terminou o cadastro',
    };
  }