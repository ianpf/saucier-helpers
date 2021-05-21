# Do-ts
Some simple helpers for handling common TypeScript tasks
## Array Helpers
### notNull
```typescript
import {notNull} from 'do-ts';

const arr: Array<string | null | undefined> = [null, 'abc'];
const newArr: Array<string> = arr.filter(notNull);
```

### isString
```typescript
import {isString} from 'do-ts';

const arr: Array<string | number | undefined> = [null, 123, 'abc'];
const newArr: Array<string> = arr.filter(isString);
```

### isNumber

```typescript
import {isNumber} from 'do-ts';

const arr: Array<string | number | undefined> = [null, 123, 'abc'];
const newArr: Array<number> = arr.filter(isNumber);
```

### arrayWrap

```typescript
import {arrayWrap} from 'do-ts';

const singular: Array<string> = arrayWrap('abc');
const array: Array<string> = arrayWrap(['abc']);
```

## Helper Types

### Many
```typescript
import {Many} from 'do-ts';

type ManyStrings = Many<string>;
// Equivalent to string | string[]
```
### ElementOf
```typescript
import {ElementOf} from 'do-ts';

const tuple = ['a', 'b', Symbol('c'), 4];
type ElementOfTuple = ElementOf<typeof tuple>; 
// Equivalent to string | number | { c: string; }
```

### Awaited
```typescript
import { Awaited } from "./types";

type SomePromise = Promise<{result: string[]}>;
type SomePromiseResult = Awaited<SomePromise>;
// Equivalent to { result: string[]; }
```

### MakeRequired
```typescript
import { MakeRequired } from "./types";
interface SomeType {
  a?: string;
  b?: number;
}
type SomePartialType = MakeRequired<SomeType, 'a'>;
// Equivalent to { a: string, b?: number}
```

### MakeOptional
```typescript
import { MakeOptional } from "./types";
interface SomeType {
  a: string;
  b: number;
}
type SomePartialType = MakeOptional<SomeType, 'a'>;
// Equivalent to { a?: string, b: number}
```
