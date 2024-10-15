//Strings

const escola = "Cod3r"

//O método charAt() em JavaScript é usado para retornar o caractere em uma posição específica dentro de uma string.
console.log(escola.charAt(4));
console.log(escola.charAt(0));

//O método charCodeAt() em JavaScript retorna o valor Unicode (ou código ASCII) do caractere em uma posição específica dentro de uma string.
console.log(escola.charCodeAt(3));

//O método indexOf() em JavaScript é usado para procurar a posição (índice) da primeira ocorrência de um valor específico em uma string ou array. Se o valor não for encontrado, o método retorna -1.
console.log(escola.indexOf('3'));

//O método substring() em JavaScript é usado para extrair uma parte de uma string, retornando a substring entre dois índices especificados.
console.log(escola.substring(1));
console.log(escola.substring(0 , 3));
console.log('Escola' + " " + escola + "!" );

//O método replace() em JavaScript é usado para substituir parte de uma string por outra. Ele substitui a primeira ocorrência de um valor específico (ou um padrão) por uma nova string.
console.log(escola.replace(3, 'e'));

//O método split() em JavaScript é usado para dividir uma string em um array de substrings, com base em um delimitador especificado.
console.log('Ana,Maria,Pedro'.split(',')); 