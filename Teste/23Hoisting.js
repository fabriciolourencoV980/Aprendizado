/*Hoisting em JavaScript é um comportamento em que as declarações de variáveis, funções e classes são "elevadas" ao topo de seu escopo antes da execução do código. Isso significa que você pode usar variáveis e funções em seu código antes de declará-las, mas com algumas ressalvas dependendo de como a variável ou função foi declarada (com var, let, const, ou como uma função).*/

console.log('a =', a);
var a = 2;
console.log('a =', a);

//console.log('b =', b);
let b = 2;
console.log('b =', b)
;
