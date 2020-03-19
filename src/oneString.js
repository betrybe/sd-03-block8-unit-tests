/*
  Essa função recebe um objeto e retorna UMA string contendo suas informações formatadas.
  Exemplo de entrada:
  { estudante: "Mirian", idade: 25, hub: "BH", bebida: "café" }

  Exemplo de saída:
    ESTUDANTE: Mirian
    IDADE: 25
    HUB: BH
    BEBIDA: Café
*/

let testObject = { estudante: "Mirian", idade: 25, hub: "BH", bebida: "café" };

const oneString = (myObject) => {
  let fullString = '';
  for(let i=0; i < Object.keys(myObject).length ; i++) {
fullString += `${Object.entries(myObject)[i][0].toUpperCase()}: ${Object.entries(myObject)[i][1]}
`;
  }
  return fullString.slice(0, -1);
}

module.exports = oneString;