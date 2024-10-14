//Tipos em JavaScript: Array 
const valores = [7.7 , 8.9 , 6.3 , 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);

//A propriedade length em JavaScript é usada para retornar o comprimento de uma string ou o número de elementos em um array.
console.log(valores.length);

//O método push() em JavaScript é usado para adicionar um ou mais elementos ao final de um array. Ele modifica o array original e retorna o novo comprimento do array.
valores.push({id: 3}, false, null, 'Teste');
console.log(valores);

//O método pop() em JavaScript é usado para remover o último elemento de um array. Ele modifica o array original, removendo o último item, e retorna o valor removido.
console.log(valores.pop());

delete valores [0];
console.log(valores);
console.log(typeof valores);