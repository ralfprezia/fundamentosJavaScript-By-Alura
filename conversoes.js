//tipo de dado junto com booleanos

//conversão implícita = converte um tipo de dado em outro
const numero = 123;
const numeroString = "123";

console.log("----------------------------------------");
console.log(numero === numeroString);
console.log("----------------------------------------");

console.log("----------------------------------------");
console.log(numero == numeroString);//pegou o number e transformou em uma string - BUG
console.log("----------------------------------------");

console.log("----------------------------------------");
console.log(numero + numeroString);//concatenou duas strings - BUG
console.log("----------------------------------------");



//conversão explicita
//utilizar funções Number()
console.log("----------------------------------------");
console.log(numero + Number(numeroString));
console.log("----------------------------------------");
//utilizar funções String()
console.log("----------------------------------------");
console.log(String(numero) + numeroString);
console.log("----------------------------------------");


const numeroComCaracter = Number("456a");
console.log("----------------------------------------");
console.log(numero + numeroComCaracter);
console.log("----------------------------------------");