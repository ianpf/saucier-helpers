# @saucier/helpers
Some simple helpers for handling common TypeScript tasks
## Array Helpers
### notNull
```typescript
import {notNull} from '@saucier/helpers';

const arr: Array<string | null | undefined> = [null, 'abc'];
const newArr: Array<string> = arr.filter(notNull);
```

### isString
```typescript
import {isString} from '@saucier/helpers';

const arr: Array<string | number | undefined> = [null, 123, 'abc'];
const newArr: Array<string> = arr.filter(isString);
```

### isNumber

```typescript
import {isNumber} from '@saucier/helpers';

const arr: Array<string | number | undefined> = [null, 123, 'abc'];
const newArr: Array<number> = arr.filter(isNumber);
```

### arrayWrap

```typescript
import {arrayWrap} from '@saucier/helpers';

const singular: Array<string> = arrayWrap('abc');
const array: Array<string> = arrayWrap(['abc']);
```

## Helper Types

### Many
```typescript
import {Many} from '@saucier/helpers';

type ManyStrings = Many<string>;
// Equivalent to string | string[]
```
### ElementOf
```typescript
import {ElementOf} from '@saucier/helpers';

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
