// Par nome/valor 

const saudacao = 'opa'; //contexto léxico 1

function exec (){
    const saudacao = 'falaa'; //contexto léxico 2 
    return saudacao;
};

//Objetos são grupos aninhados de pares de Nome/Valor

const client = {
    nome: 'Pedro',
    Idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua 10',
        numero: 12,
    }
};

console.log(saudacao);
console.log(exec());
console.log(client); 
