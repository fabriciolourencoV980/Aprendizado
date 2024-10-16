// 1 - Escopo de Função (Não de Bloco): Variáveis declaradas com var têm escopo de função. Isso significa que, se forem declaradas dentro de uma função, só estarão acessíveis dentro dessa função. Mas, se forem declaradas fora de uma função, tornam-se globais.

var numero = 1;
{
    var numero = 2;
    console.log('Dentro =', numero);
};
console.log('fora =', numero);
