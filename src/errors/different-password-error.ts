import { ApplicationError } from "@/protocols";

export function differentPasswordError(): ApplicationError {
  return {
    name: "differentPasswordError",
    message: "As senhas devem ser iguais",
  };
}
