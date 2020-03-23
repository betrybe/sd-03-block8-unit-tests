/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija o código abaixo para que a função retorne o array correto.
  
  Parâmetros:
  - Nenhum.
  
  Comportamento: 
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for(var counter = 0; counter <= 3; counter++) {
    myArray.push(counter);
    for(var counter = 2; counter <= 3; counter++) {
      myArray.push(counter);
    };
  };
  return myArray;
};

module.exports = myCounter;