//Null Undefined 

let Valor // Não Inicializada
console.log(Valor);

Valor = null; //ausência de valor
console.log(Valor); 
//console.log(Valor.toString()); //Erro

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //evitar atribuir o undefined
console.log(!!produto.preco); 
console.log(produto); 

produto.preco = null //Sem preço 
console.log(!!produto.preco);
console.log(produto); 