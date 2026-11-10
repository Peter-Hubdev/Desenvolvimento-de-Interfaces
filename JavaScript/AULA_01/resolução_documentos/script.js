//PARTE A — Primeiros comandos e variáveis

// 01. Minha primeira mensagem
console.log("Meu nome é Seu Nome");
console.log("Curso: ADS");
console.log("Estou aprendendo JavaScript");

// 02. Apresentação pessoal
const nome = "Seu Nome";
const idade = 19;
const curso = "ADS";
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);

// 03. Alterando uma variável
let pontos = 10;
pontos = 25;
console.log("Pontos:", pontos);

// 04. Tipos de dados
const texto = "ADS";
const inteiro = 42;
const decimal = 3.14;
const booleano = true;
console.log(typeof texto);    // string
console.log(typeof inteiro);  // number
console.log(typeof decimal);  // number
console.log(typeof booleano); // boolean


//PARTE B — Operadores aritméticos

// 05. Soma de dois números
const a = 15;
const b = 8;
console.log("Soma:", a + b); // 23

// 06. Quatro operações
const x = 20;
const y = 4;
console.log("Adição:", x + y);        // 24
console.log("Subtração:", x - y);     // 16
console.log("Multiplicação:", x * y); // 80
console.log("Divisão:", x / y);       // 5

// 07. Preço total de uma compra
const precoProduto = 35.00;
const quantidadeComprada = 4;
console.log("Total da compra: R$", precoProduto * quantidadeComprada); // 140

// 08. Calculando um desconto
const preco = 200.00;
const percentual = 10;
const valorDesconto = preco * percentual / 100;
const precoFinal = preco - valorDesconto;
console.log("Desconto: R$", valorDesconto); // 20
console.log("Preço final: R$", precoFinal); // 180

// 09. Média de três notas
const nota1 = 7;
const nota2 = 8;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media); // 8

// 10. Resto da divisão
console.log("10 % 3 =", 10 % 3); // 1
console.log("15 % 4 =", 15 % 4); // 3
console.log("20 % 5 =", 20 % 5); // 0


//PARTE C — Atribuição, comparação e lógica

// 11. Atualização de saldo
let saldo = 500;
saldo += 150;
saldo -= 80;
console.log("Saldo final: R$", saldo); // 570

// 12. Comparando idades
const idadePessoa = 17;
console.log(idadePessoa >= 18);  // false
console.log(idadePessoa < 18);   // true
console.log(idadePessoa === 17); // true

// 13. Igualdade de valor e tipo
console.log(10 == "10");  // true
console.log(10 === "10"); // false
// Explicação: == compara apenas o valor (converte o texto "10" em número),
// por isso dá true. === compara valor E tipo; como number e string são
// tipos diferentes, o resultado é false.

// 14. Acesso ao sistema
const idadeUsuario = 20;
const cadastroAtivo = true;
console.log(idadeUsuario >= 18 && cadastroAtivo); // true

// 15. Frete gratuito
const valorCompra = 100.00;
const clienteVIP = true;
console.log(valorCompra >= 150 || clienteVIP); // true


//PARTE D — Desafio integrador 

// 16. Compra com desconto
const produto = "teclado";
const precoUnitario = 80.00;
const quantidade = 3;
const descontoPercentual = 10;

const subtotal = precoUnitario * quantidade;
const desconto = subtotal * descontoPercentual / 100;
const total = subtotal - desconto;

console.log("Produto:", produto);
console.log("Subtotal: R$", subtotal); // 240
console.log("Desconto: R$", desconto); // 24
console.log("Total: R$", total);       // 216
