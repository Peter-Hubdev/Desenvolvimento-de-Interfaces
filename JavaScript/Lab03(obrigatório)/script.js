const botao = document.getElementById("btnCalcular");
botao.addEventListener("click", function () {
 const campo1 = document.getElementById("numero1");
 const campo2 = document.getElementById("numero2");
 const campo3 = document.getElementById("numero3");
 const resultado = document.getElementById("resultado");
 if (campo1.value === "" || campo2.value === "" || campo3.value === "" ) {
 resultado.textContent = "Preencha os 3 números.";
 return;
 }
 const numero1 = Number(campo1.value);
 const numero2 = Number(campo2.value);
 const numero3 = Number(campo3.value);
 const média = (numero1 + numero2 + numero3)
 resultado.innerHTML = `
 <p>média: ${média}</p>

 `;
});
