import { name } from './binding.mjs';
import { NOW as n1, COLLECTION as C1 } from './binding.mjs';
import { NOW as n2, COLLECTION as C2 } from './binding.mjs';
console.log('1st', 'import { NOW as n1, COLLECTION as C1 }');
console.log('2nd', 'import { NOW as n2, COLLECTION as C2 }');
console.log(
  n1 === n2
    ? 'n1 === n2: expression is executed once'
    : 'n1 !== n2: expression will execute on every import'
);
console.log(
  C1.data === C2.data
    ? 'C1.data === C2.data: inner expression is executed once'
    : 'C1.data === C2.data: inner expression will execute on every import'
);

console.log('1st log', 'name', name);
setTimeout(() => {
  console.log('2nd log', 'name', name, 'changed => binding, not value, not reference');
}, 4000);
