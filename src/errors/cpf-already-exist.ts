import { ApplicationError } from "@/protocols";

export function cpfAlreadyExist(): ApplicationError {
  return {
    name: "cpfAlreadyExist",
    message: "Este CPF já foi cadastrado",
  };
}