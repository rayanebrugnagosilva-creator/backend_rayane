let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 500 },
    { id: 4, nome: "Fone", preco: 150 },
    { id: 5, nome: "Cabo", preco: 30 }
];


// a) find

let produto = produtos.find(p => p.id == 3);

console.log(produto);


// b) filter

let caros = produtos.filter(p => p.preco > 100);

console.log(caros);


// c) map

let nomes = produtos.map(p => p.nome);

console.log(nomes);


// d) forEach

produtos.forEach(p => {

    console.log(`Produto: ${p.nome} - R$${p.preco}`);

});
