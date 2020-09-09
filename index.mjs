import sum from './sum.mjs';
let values = [10, 20, 30, 40, 50];
console.log(`sum(${values}) = ${sum(values)}`);

import { sumOdd } from './sumOdd.mjs';
console.log(`sumOdd(${values}) = ${sumOdd(values)}\n`);

import { multiply, subtract } from './operations.mjs';
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);

import * as ops from './operations.mjs';
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);