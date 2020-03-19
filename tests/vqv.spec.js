const assert = require('assert');
const vqv = require('../src/vqv.js');

describe('#vqv', () => {
  it('should return full trybe phrase with users name and age', () => {
    assert.strictEqual(typeof(vqv), "function");
    assert.strictEqual(typeof(vqv('Alberto', 30)), "string");
    assert.strictEqual(vqv("Alberto", 30), "Oi, meu nome é Alberto!\n" +
                                           "Tenho 30 anos,\n" +
                                           "estudo na Trybe e mando muito em programação!\n" +
                                           "#VQV!");
    assert.strictEqual(vqv(), undefined);
  });
});