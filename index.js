console.log("CALCULADORA");
console.log("------------");
const rl = require("readline-sync");

let operacion = rl.question("Que operación deseas realizar (suma, resta): ");
let num1 = rl.questionInt("Introduce un número: ");
let num2 = rl.questionInt("Introduce un número: ");
function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
let resultadoSuma = suma(num1, num2);

let resta = function resta(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
};
let resultadoResta = resta(num1, num2);

if (operacion === "suma") {
  console.log(`El resultado de la suma es: ${resultadoSuma}`);
} else if (operacion === "resta") {
  console.log(`El resultado de la resta es: ${resultadoResta}`);
}
