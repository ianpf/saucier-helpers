import { ElementOf } from "./types";

const tuple = ['a', 'b' { c: 'c'}, 4];
type ElementOfTuple = ElementOf<typeof tuple> 
export function isNumber(it: unknown): it is number {
  return typeof it === 'number';
}
