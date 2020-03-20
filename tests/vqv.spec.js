const assert = require('assert');
const vqv = require('../src/vqv.js');

describe('#vqv', () => {
  it('should return full trybe phrase with users name and age', () => {
    assert.strictEqual(typeof(vqv), "function");
    assert.strictEqual(typeof(vqv('Tunico', 30)), "string");
    assert.strictEqual(vqv("Tunico", 30), "Oi, meu nome é Tunico!\n" +
                                           "Tenho 30 anos,\n" +
                                           "trabalho na Trybe e mando muito em programação!\n" +
                                           "#VQV!");
    assert.strictEqual(vqv(), undefined);
  });
});