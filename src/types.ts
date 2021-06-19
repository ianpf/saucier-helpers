/**
 * Pick only keys whose properties match the given type (works with union types)
 * @T the source type
 * @PickedType the types to be included (`string | number`)
 */
export type PickKeysByType<T, PickedType extends T[keyof T]> = {
  [Q in keyof T]: T[Q] extends PickedType ? Q : never
}[keyof T];

/**
 * One or more of a type
 * @T the type
 */
export type Many<T> = T | Array<T>;

/**
 * The type or null
 * @T the type
 */
export type Nullable<T> = T | null;

/**
 * Make all the keys on @T optional that are assignable to @OptionalKeys
 * @T base type
 * @OptionalKeys keys to make required
 */
export type MakeOptional<T, OptionalKeys extends keyof T> = Omit<T, OptionalKeys> & Partial<Pick<T, OptionalKeys>>;

/**
 * Make all the keys on @T required that are assignable to @RequiredKeys
 * @T base type
 * @RequiredKeys keys to make optional
 */
export type MakeRequired<T, RequiredKeys extends keyof T> = Omit<T, RequiredKeys> & Required<Pick<T, RequiredKeys>>;

/**
 * Returns the union of the possible elements of the tuple @T
 * @T type to extract the elements from
 */
export type ElementOf<T extends readonly any[]> = T extends readonly (infer ElementType)[] ? ElementType : never;

/**
 * Returns the resolution from the promise-like type @T
 * @T promise to extract the resolution type from
 */
export type Awaited<T> = T extends PromiseLike<infer ResolvedType> ? ResolvedType : never;
