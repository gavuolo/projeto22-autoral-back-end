import { ApplicationError } from '@/protocols';

export function userAlreadyRegistered(): ApplicationError {
  return {
    name: 'userAlreadyRegistered',
    message: 'Você já finalizou seu cadastro!',
  };
}