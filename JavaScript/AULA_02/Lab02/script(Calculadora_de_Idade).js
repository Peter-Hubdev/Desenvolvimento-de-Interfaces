const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();
  // Campo vazio: checar antes do Number(), pois Number("") = 0
  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return;
  }
  const idade = Number(texto);
  // Rejeita fracionários, negativos e acima de 120
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }
  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    resultado.textContent = "Menor de idade. Faltam " + (18 - idade) + " anos para completar 18.";
  }
});
