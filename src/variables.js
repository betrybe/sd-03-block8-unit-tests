/*
  Comente as linhas dentro da função variables para que ela funcione e retorne o seguinte resultado:
  ["Eu não mudo...", "Tenho escopo global!", "Eu amo ES6!"]
*/

const myConst = "Eu não mudo...";
var myVar = "Cuidado com meu escopo."
let myLet = "Eu odeio ES6!"

const changeConst = () => { myConst = "Não funciona!" }

const changeVar = () => { myVar = "Tenho escopo global!"}

const changeLet = () => { myLet = "Eu amo ES6!" }

myVar = "Tenho escopo global!"
myLet = "Eu amo ES6!"

const variables = () => {
  // Comente apenas as linhas abaixo

  // myConst = "Não funciona!"
  // changeConst();
  changeVar();
  // myVar = "Cuidado com meu escopo."
  // let myLet = "Eu odeio ES6!"
  changeLet();

  // Comente apenas as linhas acima
  return [myConst, myVar, myLet]; 
}

console.log(typeof(variables()));
console.log(typeof(["Eu não mudo...", "Tenho escopo global!", "Eu amo ES6!"]));

module.exports = variables;