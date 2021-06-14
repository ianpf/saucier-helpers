import { ElementOf } from "./types";

export function isNumber(it: unknown): it is number {
  return typeof it === 'number';
}
