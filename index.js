import sum from './sum.js';
let values = [10, 20, 30, 40, 50];
console.log(`sum(${values}) = ${sum(values)}`);

import { sumOdd } from './sumOdd.js';
console.log(`sumOdd(${values}) = ${sumOdd(values)}\n`);

import { multiply, subtract } from './operations.js';
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);

import * as ops from './operations.js';
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);
