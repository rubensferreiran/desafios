// 4) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___
function sequanciaImpar(numeros) {
  let ultimo = numeros[numeros.length - 1];
  return ultimo + 2;
}
console.log(sequanciaImpar([1, 3, 5, 7]));

// b) 2, 4, 8, 16, 32, 64, ____
function multiplicaPorDois(numeros) {
  let ultimo = numeros[numeros.length - 1];
  return ultimo * 2;
}
console.log(multiplicaPorDois([2, 4, 8, 16, 32, 64]));

// c) 0, 1, 4, 9, 16, 25, 36, ____
function sequenciaQuadrado(numeros) {
  let num = Math.sqrt(numeros[numeros.length - 1]) + 1;
  return num * num;
}
console.log(sequenciaQuadrado([0, 1, 4, 9, 16, 25, 36]));

// d) 4, 16, 36, 64, ____
function sequenciaFibonacci(numeros) {
  let n = numeros.length;
  return numeros[n - 1] + numeros[n - 2];
}
console.log(sequenciaFibonacci([4, 16, 36, 64]));

// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____
