import { Many } from "./types";

export function wrapArray<T>(it: Many<T>) {
  return Array.isArray(it) ? it : [it];
}
