// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: '100',
    }
}; 

const { nome, idade } = pessoa; // Tire do objeto pessoa >>> nome e a idade
console.log(nome , idade ); 

const { nome: n, idade: i} = pessoa; 
console.log(n,i);

const { sobrenome, bemHumorada = null} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);