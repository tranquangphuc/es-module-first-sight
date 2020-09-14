import { ONE, TWO, NOW, COLLECTION } from './binding.js';
// ONE = 2; // read-only
// TWO = 1; // read-only
// name = 'dirty'; // read-only
// console.log('set name', name, 'ONE', ONE, 'TWO', TWO); // same
console.log('importer cannot change name, ONE, TWO');
COLLECTION.one = 2;
COLLECTION.two = 1;
COLLECTION.name = '@@';
console.log('change', 'collection', COLLECTION);
