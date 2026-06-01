const input = require('readline-sync');

let nome = input.question("Digite seu nome: ");
let idade = input.question("Digite sua idade: ");
let cidade = input.question("Digite sua cidade: ");

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);