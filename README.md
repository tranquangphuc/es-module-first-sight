## The jQuery days' problems

The only way to share variables/functions is to put it on the scope above you.

For example, before you could load any jQuery plug-ins, you had to make sure that jQuery was in the global scope.

This works, but they are some annoying problems that result.

1. First, all of your script tags need to be in the right order. Then you have to be careful to make sure that no one messes up that order.
2. A second problem is that because these variables are on the global scope, every part of the code that’s inside of that global scope can change the variable. Malicious code can change that variable on purpose to make your code do something you didn’t mean for it to, or non-malicious code could just accidentally clobber your variable.

Source: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

## How do modules help?

Modules can:

1.  Be shared among projects easily.
2.  Be tested independently.
3.  Have their own namespace and scope and can have private variables.
5.  Dynamic loading

## Understanding ES Module

### Create and Using Module

```js
// sum.mjs
export default function (values) {
  return values.reduce((total, val) => total + val, 0);
}

// index.mjs
import sum from './sum.mjs';
let values = [10, 20, 30, 40, 50];
console.log(`sum(${values}) = ${sum(values)}`);
```

### Export Named Features from a Module

```js
// sumOdd.mjs
import sumValues from './sum.mjs';

export function sumOdd(values) {
  return sumValues(
    values.filter((item, index) => index % 2 === 0)
  );
}

// index.mjs
// let values = ...
import { sumOdd } from './sumOdd.mjs';
console.log(`sumOdd(${values}) = ${sumOdd(values)}\n`);
```

### Define Multiple Named Features in a Module

```js
// operations.mjs
export function multiply(values) {
  return values.reduce((total, val) => total * val, 1);
}
export function subtract(amount, values) {
  return values.reduce((total, val) => total - val, amount);
}
export function divide(first, second) {
  return first / second;
}

// index.mjs
// let values = ...
import { multiply, subtract } from './operations.mjs';
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
```

### Import Whole Module

```js
// index.mjs
import * as ops from './operations.mjs';
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);
```

More example from `moz://a`:

- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## Some Practices

1. Prefer named exports
2. Default export names should match file names
3. `import` first, `export` last
4. Import neccessary, avoid import whole module

## Addition Notes

- You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a `file://` URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.
- Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because modules use [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) automatically.
- There is no need to use the `defer` attribute (see [`<script>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Attributes 'The HTML `<script>` element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code.')) when loading a module script; modules are deferred automatically.
- Modules are only executed once, even if they have been referenced in multiple `<script>` tags.
- Last but not least, let's make this clear — module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but you'll not be able to use some of the debugging techniques you might have expected to use.
- **Binding**, not values, not references

See more: [ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth)
