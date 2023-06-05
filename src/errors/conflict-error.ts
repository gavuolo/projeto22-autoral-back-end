
export function conflictError(message: string) {
  return {
    name: 'ConflictError',
    message,
  };
}