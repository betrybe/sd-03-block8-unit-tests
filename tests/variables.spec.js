const assert = require('assert');
const variables = require('../src/variables');

describe('#variables', () => {
  it('should return the folowing array', () => {
    assert.deepEqual(variables(), ["Eu não mudo...", "Tenho escopo global!", "Eu amo ES6!"]);
  });
});

