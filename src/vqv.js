/*
  Escreva uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Exemplo: 
    vqv(Alberto, 30);
      Oi, meu nome é Alberto!
      tenho 30 anos,
      estudo na Trybe e mando muito em programação!
      #VQV!
  Se a função estiver sem parametros deve retornar undefined
*/

const vqv = (nome, idade) => {
  if(nome && idade) {
  return (`Oi, meu nome é ${nome}!
Tenho ${idade} anos,
estudo na Trybe e mando muito em programação!
#VQV!`)
} else {
  return undefined;
}
}

module.exports = vqv;