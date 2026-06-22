let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 7 },
    { nome: "Lucas", nota: 5 }
];


let resultado = alunos.map(aluno => {

    if (aluno.nota >= 7) {
        aluno.situacao = "Aprovado";
    } else {
        aluno.situacao = "Reprovado";
    }

    return aluno;

});


let aprovados = resultado.filter(aluno => aluno.situacao == "Aprovado");


let soma = 0;

for (let aluno of alunos) {
    soma += aluno.nota;
}

let media = soma / alunos.length;


console.log(resultado);
console.log(`Aprovados: ${aprovados.length}`);
console.log(`Média da turma: ${media}`);
