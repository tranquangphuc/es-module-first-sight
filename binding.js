export let name = 'clean';
export const ONE = 1;
export const TWO = 2;
export let NOW = new Date();
export const COLLECTION = {
  name,
  one: ONE,
  two: TWO,
  data: JSON.parse('[]'),
};
console.log('origin export', 'name', name, 'ONE', ONE, 'TWO', TWO, 'NOW', NOW);
console.log('origin export', 'collection', COLLECTION);
setTimeout(() => {
  const oldName = name;
  name = 'dirty';
  console.log('module', 'collection', COLLECTION);
  console.log('module', 'name', name, '(previous', oldName, ')', 'ONE', ONE, 'TWO', TWO, 'NOW', NOW);
}, 2000);