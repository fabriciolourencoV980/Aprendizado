console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola2';
console.log(obj1.nome);

/*Em JavaScript, a palavra-chave this é usada para referir-se ao contexto no qual a função ou o código está sendo executado. O valor de this pode variar dependendo de onde e como uma função é chamada, pois ele se refere ao objeto que está "invocando" a função. */

function Obj (nome){
    this.nome = nome 
    this.exec = function (){
        console.log('Exec..')
    }
}; 

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()
