import { ApplicationError } from "@/protocols";

export function councilRegistrationAlreadyExist(): ApplicationError {
  return {
    name: "councilRegistrationAlreadyExist",
    message: "Este número de Registro de conselho já existe!",
  };
}