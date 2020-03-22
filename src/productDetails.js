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
  */

  const productDetails = (firstProduct, secondProduct) => {
    return [
      {
        name: firstProduct,
        details: {
          productId: `${firstProduct}123`
        }
      },
      {
        name: secondProduct,
        details: {
          productId: `${secondProduct}123`
        }
      }
    ];
  };

  module.exports = productDetails;