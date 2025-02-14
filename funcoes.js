// funções e escopo
// exercício 1
function converterParaMaiusculas(str) {
    var mensagem = "Mensagem teste";
    return str.toUpperCase();
}
console.log(converterParaMaiusculas("Teste de conversor de maiúsculas."));

const converterParaMaiusculasArrow = (str) => {

    return str.toUpperCase();
}
console.log(converterParaMaiusculasArrow("Teste 2 de conversor de maiúsculas."));

// como a variável "mensagem" está dentro de uma função, ela não pode ser acessada fora dela.

//exercício 2
function processarDados(callback) {
    console.log("Processando dados...");
    setTimeout(callback, 1000);
  }
  
  function buscarUsuario() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ nome: "Fulano", id: 1 });
      }, 1000);
    });
  }
  
  processarDados(() => {
    buscarUsuario().then((usuario) => {
      console.log("Usuário encontrado: ", usuario);
    });
  });