const input = require('readline-sync');

let n1 = Number(input.question("Digite o primeiro número:"));
let n2 = Number(input.question("Digite o segundo número:"));

console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);

if(n2===0){
    console.log("Não é possivel dividir por 0");
}
else{console.log(n1/n2);}
