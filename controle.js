// estruturas de controle
// exercício 1
let numero = 0;

if (numero > 0) {
    console.log("O número é positivo.")
} else if (numero < 0) {
    console.log("O número é negativo.")
} else {
    console.log("O número é zero.")
};

console.log("Números de 1 a 10:")
for (let i = 1; i <= 10; i++) {
    console.log(i);
};

let valor = 0;
let soma = 1;

while (soma <= 5) {
    valor += soma;
    soma++;
}

console.log("A soma dos números de 1 a 5 é:", valor);

// exercício 2
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function exibirMenu() {
  let opcao;

  const perguntar = (pergunta) => {
    return new Promise((resolve) => {
      rl.question(pergunta, (resposta) => {
        resolve(resposta);
      });
    });
  };

  async function menu() {
    do {
      opcao = await perguntar('Escolha uma opção: \n A - Opção A \n B - Opção B \n S - Sair \n Digite a opção desejada: ');

      opcao = opcao.toUpperCase(); 

      switch (opcao) {
        case 'A':
          console.log('Opção A selecionada. \n');
          break;
        case 'B':
          console.log('Opção B selecionada. \n');
          break;
        case 'S':
          console.log('Você saiu.');
          rl.close();  
          return;  
        default:
          console.log('Opção inválida. \n');
      }
    } while (opcao !== 'S');
  }

  menu();  
}

exibirMenu(); 

