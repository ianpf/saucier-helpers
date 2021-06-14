import { Many } from "./types";

export function arrayWrap<T>(it: Many<T>) {
  return Array.isArray(it) ? it : [it];
}
