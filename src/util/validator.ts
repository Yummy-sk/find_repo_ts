export function validator<T>(argument: T | undefined | null): argument is T {
  return argument !== undefined && argument !== null;
}
