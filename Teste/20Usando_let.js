//A palavra-chave let em JavaScript é usada para declarar variáveis com escopo de bloco. Isso significa que as variáveis declaradas com let só estão acessíveis dentro do bloco {} em que foram definidas, tornando-a uma forma mais segura e moderna de criar variáveis em comparação com var.

let numero = 1;
{
    let numero = 2;
    console.log('Dentro = ',numero);
};
console.log('Fora =',numero); 

/*
  1 - Escopo de Bloco: Diferente de var, as variáveis declaradas com let são limitadas ao bloco em que foram definidas (como dentro de loops ou condições). Isso evita que a variável seja acessada ou modificada fora do escopo em que foi criada.
  
  2 - Não Permite Declaração Múltipla: Você não pode declarar a mesma variável duas vezes no mesmo escopo usando let. Isso ajuda a evitar bugs.
  
  3 - Hoisting com Inicialização Tardia: Assim como var, variáveis declaradas com let são "elevadas" (hoisting) ao topo do escopo. No entanto, diferentemente de var, elas não são inicializadas até que a declaração seja avaliada, e tentar acessar a variável antes da declaração resulta em um erro ReferenceError.

  4 - Adequado para Loops: O uso de let em loops é particularmente útil porque ele mantém o escopo correto de cada iteração, diferentemente de var.
*/