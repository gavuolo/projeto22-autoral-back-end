import { ApplicationError } from "@/protocols";

export function duplicatedEmailError(): ApplicationError {
    return {
      name: 'DuplicatedEmailError',
      message: 'Já existe um usuário cadastrado com este e-mail',
    };
  }
  