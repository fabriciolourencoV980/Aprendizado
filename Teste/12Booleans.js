//Valores Booleanos

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//O simbolo de ! é negação ou seja (False) se usar duas ! retorna o valor (True) Negação lógica.
isAtivo = 1;
console.log(!1);
console.log(!!2);

console.log('Os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); 

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Pra finalizar')
console.log(!!('' || null || 0 || ' '));

let nome = ''
console.log(nome || 'Desconhecido')