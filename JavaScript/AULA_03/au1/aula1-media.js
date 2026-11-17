
let nome = window.prompt("Qual é o seu nome?");

// Dados do estudante
const nomeEstudante = "Mariana";
const nota1 = 8;
const nota2 = 7;
const nota3 = 9;
// Cálculo da média
const media = (nota1 + nota2 + nota3) / 3;
// Apresentação dos resultados
console.log("Estudante:", nomeEstudante);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média:", media.toFixed(1));

const nomeEstudante2 = prompt(
    "Informe o nome do estudante:"
   );
   const Nota1 = Number(prompt("Informe a primeira nota:"));
   const Nota2 = Number(prompt("Informe a segunda nota:"));
   const Nota3 = Number(prompt("Informe a terceira nota:"));
   const Media = (Nota1 + Nota2 + Nota3) / 3;
   console.log("Estudante:", nomeEstudante);
   console.log("Média:", Media.toFixed(1));