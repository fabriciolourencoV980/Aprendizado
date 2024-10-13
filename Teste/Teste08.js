const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

/*O método Number.isInteger() em JavaScript é usado para verificar se o valor passado é um número inteiro. 
Ele retorna true se o valor for um número inteiro, e false caso contrário.*/

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2); 

console.log(media.toFixed(2));
console.log(media.toString(2)); //Coverte em Binário
console.log(typeof media);
console.log(typeof Number);

/*O método toFixed() em JavaScript é usado para formatar um número, arredondando-o para um número fixo de casas decimais e retornando o resultado como uma string.*/
/*O método toString() em JavaScript é utilizado para converter um valor, como números ou objetos, em uma string.*/