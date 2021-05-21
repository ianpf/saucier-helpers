export function notNull<T>(it: T): it is Exclude<T, null | undefined> {
  return it != null;
}
