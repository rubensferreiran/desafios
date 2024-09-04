// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

function verificaString(string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      contador++;
    }
  }
  if (contador === 1) {
    return `Repete a letra 'a' ou 'A': ${contador} vez`;
  } else if (contador > 1) {
    return `Repete a letra 'a' ou 'A': ${contador} vezes`;
  } else {
    return `A letra 'a' ou 'A' não aparece`;
  }
}

document
  .querySelectorAll("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let string = document.querySelectorAll("#string")[0].value;
    const verificar = verificaString(string);
    let elemento = document.querySelectorAll("#resultado")[0];
    elemento.innerHTML = verificar;

    document.querySelectorAll("#string")[0].value = "";
  });
