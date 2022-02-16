const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo!';
const senha = "senhaSuperSegura12345@";
const stringNumeros = "12345";

const citacao = 'O Ralf disse "Olá!"';
const citacao2 = "O Ralf disse 'Olá!'";

console.log(texto1);
console.log(texto2);
console.log(senha);
console.log(stringNumeros);
console.log(citacao);
console.log(citacao2);



//template string OU template literal

//concatenação(+)
const citacao3 = "Meu nome é ";
const meuNome = "Ralf";
console.log(citacao3 + meuNome);
console.log(citacao3 + meuNome);


//transformação/conversão do código Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)





//transformar strings
const cidade = "poços de caldas";
const input = "Poços de Caldas";

console.log(cidade === input); // false


const cidade2 = "poços de caldas";
const input2 = "Poços de Caldas";

const input2Minusculo = input2.toLowerCase();

console.log(cidade2 === input2Minusculo); // true



//tamanho da string
const senha2 = "minhaSenha123456";
console.log(senha2.length); // 16 caracteres
