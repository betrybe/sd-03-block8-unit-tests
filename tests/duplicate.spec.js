const assert = require('assert')
const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('checks if any of the params are duplicated', () => {
    assert.strictEqual(duplicate(1, 2, 3), false);
    assert.strictEqual(duplicate(1, 2, 3, 2), true);
  });
});
