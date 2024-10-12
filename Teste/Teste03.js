//Trabalhando com variaveis e com a concatenação de Strings(+): 

let preco = 19.90;
let desconto = 0.4; 

console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1- desconto);
console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria";

console.log(nome + " " + categoria)
console.log("Produto: " + nome + " " + "Categoria: " + categoria );
console.log(`Produto: ${nome};\n Catgoria: ${categoria}.`);