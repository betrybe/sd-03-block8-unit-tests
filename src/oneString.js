/*
  Escreva uma função que recebe um objeto e retorna UMA string contendo suas informações formatadas.
  Exemplo de entrada:
  { estudante: "Mirian", idade: 25, hub: "BH", bebida: "café" }

  Exemplo de saída:
    Estudante: Mirian
    Idade: 25
    Hub: BH
    Bebida: Café
*/

const testObject = { estudante: "Mirian", idade: 25, hub: "BH", bebida: "café" };

const oneString = (object) => {
  for(let i=0; i < object.length ; i++) {
    Object.entries(object)[i][0];
  }
}

oneString(testObject);

module.exports = oneString;