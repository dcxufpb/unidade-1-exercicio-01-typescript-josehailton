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
const cupom_imprime_dados_loja = require('./cupom');

test('retornou o texto correto para o cupom fiscal', () => {
  expect(cupom_imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});
