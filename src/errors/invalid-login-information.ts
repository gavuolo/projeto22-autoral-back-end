import { ApplicationError } from "@/protocols";

export function invalidLoginInformation(): ApplicationError {
    return {
      name: 'invalidLoginInformation',
      message: 'Invalid email or password',
    };
  }