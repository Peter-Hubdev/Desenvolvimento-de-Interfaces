# MATERIAL DIDÁTICO DO ESTUDANTE

## Desenvolvimento de Interface — Módulo JavaScript | Aula 3
### DOM, eventos e projeto integrador: calculadora de média

* **Docente:** Profa. Kadidja Valéria | ADS | CEUB
* **Modalidade:** Laboratório prático
* **Duração:** 2h30
* **Nível:** Iniciante

---

## 1. Apresentação

Nesta aula, você reunirá os conteúdos das três aulas do módulo para construir uma aplicação web que recebe o nome de um estudante e três notas, verifica os dados, calcula a média e apresenta a situação acadêmica na própria página. O projeto utiliza **HTML** (estrutura), **CSS** (apresentação) e **JavaScript** (comportamento).

* **Objetivos:** selecionar elementos do DOM; capturar eventos de clique; ler e converter dados de formulários; validar campos e notas; organizar cálculos em funções; apresentar mensagens na interface; testar e documentar a solução.
* **Resultado final:** uma calculadora que classifica a média em:
  * **Aprovado:** $\text{média} \ge 7$
  * **Recuperação:** $5 \le \text{média} < 7$
  * **Reprovado:** $\text{média} < 5$

> *Nota: Esses limites são as regras didáticas definidas para este projeto.*

---

## 2. Organização do laboratório

* **Etapa 1 (15 min):** revisar HTML, CSS e JavaScript e abrir o projeto.
* **Etapa 2 (25 min):** compreender DOM, `querySelector` e `textContent`.
* **Etapa 3 (25 min):** implementar campos e eventos.
* **Etapa 4 (25 min):** ler valores, validar e criar funções.
* **Etapa 5 (40 min):** integrar, testar e corrigir.
* **Etapa 6 (20 min):** registrar testes e entregar.

---

## 3. Preparação do ambiente — passo a passo

1. Abra o **Visual Studio Code** e crie a pasta `aula03-calculadora-media`.
2. Crie os arquivos `index.html`, `estilo.css`, `script.js` e `registro-de-testes.md`.
3. Mantenha os quatro arquivos na mesma pasta. Abra `index.html` no navegador (ou utilize a extensão *Live Server*).
4. Pressione **F12** e abra a aba **Console** para acompanhar possíveis erros.
5. Salve os arquivos sempre que alterar o código e atualize a página.

```text
aula03-calculadora-media/
├── index.html
├── estilo.css
├── script.js
└── registro-de-testes.md
```

---

## 4. Entendendo o DOM

O **Document Object Model (DOM)** é a representação da página HTML como objetos manipuláveis por JavaScript. O navegador interpreta o HTML e disponibiliza os elementos para consulta e alteração.

### Passo 1 — Identificar os elementos

```html
<h1 id="titulo">Calculadora</h1>
<p id="resultado">Aguardando...</p>
```

**Explicação:** O atributo `id` identifica um elemento de forma única. O parágrafo será a região em que a aplicação apresentará as mensagens.

### Passo 2 — Selecionar pelo identificador

```javascript
const titulo = document.querySelector('#titulo');
const resultado = document.querySelector('#resultado');
console.log(titulo.textContent);
```

**Explicação:** `document.querySelector('#titulo')` procura o elemento cujo `id` é `titulo`. O símbolo `#` é usado para selecionar um ID, e o resultado da busca é guardado em uma variável `const`.

> **Resultado esperado no console:** `Calculadora`. Se o seletor não encontrar um elemento, ele retornará `null`. Confira se o ID foi digitado corretamente e se o script executa após o HTML estar carregado.

### Passo 3 — Alterar o texto visível

```javascript
resultado.textContent = 'Cálculo concluído!';
```

**Explicação:** `textContent` modifica o texto exibido na tela sem alterar o arquivo HTML original. Prefira sempre `textContent` para mensagens geradas a partir de dados do usuário.

---

## 5. Eventos: reagindo ao clique

Um evento representa uma ação do usuário, como clicar em um botão. O método `addEventListener` associa uma função a essa ação.

### Passo 4 — Criar botão e área de resposta

```html
<button id="calcular" type="button">Calcular</button>
<p id="resultado">Aguardando...</p>
```

**Explicação:** `type="button"` evita o envio automático de formulários e o recarregamento da página. Quando carregado ao final do `body`, o script encontra todos os elementos já criados.

### Passo 5 — Programar o clique

```javascript
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', function () {
  resultado.textContent = 'Botão acionado!';
});
```

**Explicação:** A função é executada a cada clique. Teste pressionando o botão várias vezes. Em seguida, substituiremos essa função pelo cálculo completo.

---

## 6. Construindo o projeto integrador

### Passo 6 — Escrever o HTML completo (`index.html`)

Copie o código a seguir. Ele fornece os campos, os rótulos, o botão, a área de resposta e a ligação com o CSS e o JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora de Média</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <main class="container">
    <h1>Calculadora de Média</h1>
    <p>Informe o nome e as três notas do estudante.</p>

    <label for="nome">Nome do estudante</label>
    <input id="nome" type="text" placeholder="Ex.: Mariana">

    <label for="nota1">Nota 1</label>
    <input id="nota1" type="number" min="0" max="10" step="0.1">

    <label for="nota2">Nota 2</label>
    <input id="nota2" type="number" min="0" max="10" step="0.1">

    <label for="nota3">Nota 3</label>
    <input id="nota3" type="number" min="0" max="10" step="0.1">

    <button id="calcular" type="button">Calcular média</button>

    <p id="resultado" aria-live="polite">Aguardando dados...</p>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

**Entenda:**
* `label` associa o texto descritivo ao campo (`for` + `id`).
* `type="number"` facilita a digitação numérica; `min`, `max` e `step` orientam o preenchimento, mas **não substituem a validação em JavaScript**.
* `aria-live="polite"` permite que tecnologias assistivas (leitores de tela) anunciem a atualização do resultado.

### Passo 7 — Aplicar o CSS (`estilo.css`)

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 24px;
  background: #f7f5f9;
  font-family: Arial, sans-serif;
  color: #25202b;
}

.container {
  max-width: 540px;
  margin: 24px auto;
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 3px 14px #00000018;
}

h1 {
  color: #43054e;
}

label {
  display: block;
  margin-top: 16px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 11px;
  margin-top: 6px;
  border: 1px solid #999;
  border-radius: 6px;
}

button {
  margin-top: 22px;
  padding: 12px 18px;
  width: 100%;
  border: 0;
  border-radius: 6px;
  background: #662c92;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #43054e;
}

button:focus-visible,
input:focus-visible {
  outline: 3px solid #ec0089;
  outline-offset: 2px;
}

#resultado {
  margin-top: 18px;
  padding: 14px;
  background: #f5eff9;
  border-radius: 6px;
}
```

**Explicação:** O CSS organiza a interface visual sem interferir nos cálculos. O estilo `:focus-visible` melhora a acessibilidade na navegação pelo teclado.

### Passo 8 — Entender a leitura e conversão dos valores

```javascript
const estudante = nome.value.trim();
const n1 = Number(nota1.value);
const n2 = Number(nota2.value);
const n3 = Number(nota3.value);
```

**Explicação:**
* `.value` devolve texto (`string`), mesmo em um campo `type="number"`.
* `trim()` remove espaços em branco no começo e no fim do nome.
* `Number()` converte o conteúdo das notas para número. Faça essa leitura **dentro do evento de clique** para capturar os dados atuais.

> **Atenção:** `Number('')` resulta em `0`. Por isso, **verifique os campos vazios antes da conversão**. Se um valor não puder ser convertido, o resultado será `NaN` (*Not a Number*).

### Passo 9 — Validar campos obrigatórios

```javascript
if (!estudante || nota1.value === '' || nota2.value === '' || nota3.value === '') {
  resultado.textContent = 'Preencha todos os campos.';
  return;
}
```

**Explicação:** `||` significa **OU**; basta uma condição verdadeira para exibir o aviso e interromper o cálculo. O `return` encerra imediatamente a execução da função do evento.

### Passo 10 — Validar o intervalo de notas

```javascript
const valores = [n1, n2, n3];
const invalida = valores.some(nota =>
  Number.isNaN(nota) || nota < 0 || nota > 10
);

if (invalida) {
  resultado.textContent = 'Use notas entre 0 e 10.';
  return;
}
```

**Explicação:** O array reúne as três notas e o método `some()` verifica se **alguma** delas atende à condição de erro. Uma nota negativa, acima de 10 ou inválida impede o cálculo.

### Passo 11 — Criar funções independentes

```javascript
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperação';
  return 'Reprovado';
}
```

**Explicação:** `calcularMedia` recebe três números e devolve a média aritmética. `classificar` devolve uma string com a situação. A ordem das condições é importante: primeiro testa-se a maior faixa (`>= 7`), depois a intermediária (`>= 5`).

> **Teste no console:** `calcularMedia(8, 7, 9)` deve retornar `8`; `classificar(8)` deve retornar `'Aprovado'`.

### Passo 12 — Integrar o JavaScript completo (`script.js`)

Substitua os testes anteriores pelo código funcional abaixo. **Não cole um segundo listener sobre o primeiro:** mantenha apenas esta versão final.

```javascript
const nome = document.querySelector('#nome');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperação';
  return 'Reprovado';
}

botao.addEventListener('click', () => {
  // 1. Ler o nome e verificar campos vazios.
  const estudante =
