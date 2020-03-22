const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.
  
  Parâmetros:
  - Uma string;
  - Uma string;
  
  Comportamento: 
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'a'
      details: {
        productId: 'alcoolGel123'
      }
    },
    {
      name: 'a'
      details: {
        productId: 'mascara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
  */

 describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.

  });
});