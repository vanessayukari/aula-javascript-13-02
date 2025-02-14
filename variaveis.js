// variáveis e tipos de dados
// exercício 1
let nome = "Vanessa Yukari Iwamoto";
let idade = 27;
let aprovado = true;
let notas = [9.0, 8.5, 8.5];

let usuario = {
    email: "vaneyukari@outlook.com",
    senha: "senha123"
};

console.log ("Usuário:", usuario);
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Notas:", notas);
console.log("Aprovado:", aprovado);

// "null" é um valor vazio atribuído propositalmente,
// enquanto "undefined" aparece quando uma variável é declarada e não tem valor atribuído.

// exercício 2
let valorNulo = null;
let valorIndefinido;

if (valorNulo === null) {
    console.log("valorNulo = null")
} else if (valorNulo === undefined) {
    console.log("valorNulo = undefined")
};

if (valorIndefinido === null) {
    console.log("valorIndefinido = null")
} else if (valorIndefinido === undefined) {
    console.log("valorIndefinido = undefined")
}