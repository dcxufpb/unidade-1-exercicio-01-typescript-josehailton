const nome_loja: string = "Arcos Dourados Com. de Alimentos LTDA"
const logradouro: string = "Av. Projetada Leste"
const numero: number = 500
const complemento: string = "EUC F32/33/34"
const bairro: string = "Br. Sta Genebra"
const municipio: string = "Campinas"
const estado: string = "SP"
const cep: string = "13080-395"
const telefone: string = "(19) 3756-7408"
const observacao: string = "Loja 1317 (PDP)"
const cnpj: string = "42.591.651/0797-34"
const inscricao_estadual: string = "244.898.500.113"

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
