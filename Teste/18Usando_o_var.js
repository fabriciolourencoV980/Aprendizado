// Em JavaScript, var é uma palavra-chave usada para declarar variáveis. No entanto, ela tem um comportamento particular em comparação com outras formas modernas de declarar variáveis, como let e const.

{ 
    {
        {
            { 
                var sera = 'Será?'   
            } 
        }
    }
}
console.log(sera); 

function teste(){
    var local = 123
    console.log(local)
};

teste();
// console.log(local); >>> Retorna erro 

/*  1 - Escopo de Função (Não de Bloco): Variáveis declaradas com var têm escopo de função. Isso significa que, se forem declaradas dentro de uma função, só estarão acessíveis dentro dessa função. Mas, se forem declaradas fora de uma função, tornam-se globais.

    2 - Hoisting (Elevação): Variáveis declaradas com var são "elevadas" ao topo do escopo antes da execução do código. Ou seja, elas podem ser usadas antes de serem declaradas, embora o valor seja undefined até sua inicialização.

    3 - Declaração Múltipla: Você pode declarar a mesma variável várias vezes usando var, sem erros, o que pode causar problemas de manutenção e confusão.
    */