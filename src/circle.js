/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.
*/

const circle = (radius) => {
  const PI = 3.14;
  let info = {
    radius: radius,
    area: PI * Math.pow(radius, 2),
    circumference: 2 * PI * radius,
  }
  return radius ? info : undefined;
}

module.exports =  circle;