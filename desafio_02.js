// 2) Dado a sequência de Fibonacci,
//  onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde,
//  informado um número,
//  ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function finobacci(numero) {
  let num1 = 0;
  let num2 = 1;

  if (numero === 0 || numero === 1) {
    return `O número ${numero} pertence a sequência do Finobacci!`;
  }
  for (let i = 0; num2 <= numero; i++) {
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    if (num2 === numero) {
      return `O número ${numero} pertence a sequência do Finobacci!`;
    }
  }
  return `O número ${numero} não pertence a sequência do Finobacci!`;
}

document
  .querySelectorAll("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const numero = parseInt(document.querySelectorAll("#numero")[0].value);
    const resultado = finobacci(numero);
    document.querySelectorAll("#resultado")[0].textContent = resultado;
  });
