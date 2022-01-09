// =========
// Essencial
// =========

function saudar(nome) {
  return `Olá, ${nome}`;
}

function extrairPrimeiroNome(nomeCompleto) {
  return nomeCompleto.split(" ")[0];
}

function capitalizar(nome) {
  const nomeCapitalizado =
    nome.substr(0, 1).toUpperCase() + nome.substr(1, nome.length).toLowerCase();
  return nomeCapitalizado;
}

function calculaImposto(preco, categoria) {
  if (categoria === "Alimentação") {
    return 0;
  } else {
    return preco * 0.1;
  }
}

function calculaDesconto(preco, categoria, cupom) {
  if (categoria === "Alimentação" && cupom === "NULABSSA") {
    return preco - preco * 0.5;
  } else {
    return preco;
  }
}

// =========
// Desejável
// =========

function truncar(palavra, comprimento = 5) {
  if (palavra.length > comprimento) {
    return palavra.substr(0, comprimento) + "...";
  } else {
    return palavra;
  }
}

function validaTextoPreenchido(texto) {
  const textoSemEspaco = texto.trim();
  if (textoSemEspaco.length > 0) {
    return textoSemEspaco;
  } else {
    return undefined;
  }
}

// =======
// Desafio
// =======

function validaData(data) {
  const dataDividida = data.split("/");
  if (dataDividida.length !== 3) {
    return NaN;
  }
  const dia = dataDividida[0];
  const mes = dataDividida[1];
  const ano = dataDividida[2];

  if (dia < 1 || dia > 31) return NaN;
  else if (mes < 1 || mes > 12) return NaN;
  else if (ano < 1900 || ano > 2023) return NaN;
  else return new Date(`${dia}/${mes}/${ano}`);
}

module.exports = {
  saudar,
  extrairPrimeiroNome,
  capitalizar,
  calculaImposto,
  calculaDesconto,
  truncar,
  validaTextoPreenchido,
  validaData,
};
