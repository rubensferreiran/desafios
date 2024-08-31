// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function invertePalavra(palavra) {
  let palavraInvertida = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }
  return palavraInvertida;
}
document
  .querySelectorAll("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let palavra = document.querySelectorAll("#string")[0].value;
    const palavraInvertida = invertePalavra(palavra);
    let elemento = document.querySelectorAll("#resultado")[0];
    elemento.innerHTML = `A palavra invertida fica assim: <span style="color: red; font-size: 20px; text-transform: uppercase">${palavraInvertida}</span>`;

    document.querySelectorAll("#string")[0].value = "";
  });
