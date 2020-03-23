// var myVar = "Cuidado com meu escopo."

// const changeVar = () => { myVar = "Tenho escopo global!"}

// myVar = "Estou mudando fora da função"

// const variables = () => {
//   // Comente apenas as linhas abaixo

//   changeVar();
//   // myVar = "Cuidado com meu escopo."

//   // Comente apenas as linhas acima
//   return [myVar]; 
// }


















/*
  Comente algumas das linhas dentro da função variables para que ela funcione e retorne o seguinte resultado:
  ["A", "y", "2"]
*/

const myConst = "A";
var myVar = "x"
let myLet = "1"

const changeConst = () => { myConst = "B" }

const changeVar = () => { myVar = "y"}

const changeLet = () => { myLet = "2" }

const variables = () => {
  // Comente apenas as linhas abaixo

  // myConst = "C"
  // changeConst();
  changeVar();
  // myVar = "z"
  // let myLet = "3"
  changeLet();

  // Comente apenas as linhas acima
  return [myConst, myVar, myLet]; 
}

console.log(variables());

module.exports = variables;