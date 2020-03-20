const assert = require('assert');
const numbers = require('../src/numbers');

// A função deve receber um array de tamanho variável
// A função deve retornar o valor true se todos os elementos forem do tipo Number
// A função deve retornar o valor false se algum elemento não for do tipo Number

describe('#numbers', () => {
  it('should return an array and return if it has only numbers or not', () => {
    assert.strictEqual(numbers[(1, 4, 3, 2, 5)], true);
    assert.strictEqual(numbers([1, 'a', 3]), false);
    assert.strictEqual(numbers([1, 3, NaN]), true);
  });
});
