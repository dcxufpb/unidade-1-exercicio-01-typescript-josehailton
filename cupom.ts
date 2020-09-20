function imprime_dados_loja(): void {
  console.log(nome_loja)
  console.log(`${logradouro}, ${numero} ${complemento}`);
  console.log(`${bairro} - ${municipio} - ${estado}`);
  console.log(`CEP: ${cep}, Tel ${telefone}`);
  console.log(observacao);
  console.log(`CNPJ: ${cnpj}`);
  console.log(`IE: ${inscricao_estadual}`);
}

module.exports = imprime_dados_loja;
