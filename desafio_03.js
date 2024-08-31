// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamento = require("./faturamento_deafio_03.json");

function calculaEstatistica(dados) {
  const faturamentosValidados = dados.filter((item) => item.faturamento > 0);
  if (faturamentosValidados.length === 0) {
    return "Não existe faturamentos válidados";
  }

  const minimo = Math.min(
    ...faturamentosValidados.map((item) => item.faturamento)
  );
  const maximo = Math.max(
    ...faturamentosValidados.map((item) => item.faturamento)
  );

  const total = faturamentosValidados.reduce(
    (acc, item) => acc + item.faturamento,
    0
  );
  const media = total / faturamentosValidados.length;
  const mediaAcima = faturamentosValidados.filter(
    (item) => item.faturamento > media
  ).length;

  return {
    minimo,
    maximo,
    mediaAcima,
  };
}

const resultado = calculaEstatistica(faturamento);
console.log("Faturamento abaixo: ", resultado.minimo);
console.log("Faturamento acima: ", resultado.maximo);
console.log("Dias com faturamento acima: ", resultado.mediaAcima);
