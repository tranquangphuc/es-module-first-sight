setTimeout(async () => {
  if (true) {
    // import module for side effects
    let val = await import('./binding.js');
    console.log('delay import', 'name', val.name, 'ONE', val.ONE, 'TWO', val.TWO, 'NOW', val.NOW);
    console.log('delay import', 'collection', val.COLLECTION);
  }
}, 3000);
