//String()
let telefone = 12341234;
console.log("String()----------------------------------------");
console.log("O telefone é " + String(telefone)); 
console.log("----------------------------------------");

let telefone2 = 2345678;
console.log("String()----------------------------------------");
console.log("O telefone é " + telefone.toString());
console.log("----------------------------------------");

let usuarioConectado = false;
console.log("String()----------------------------------------");
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
console.log("----------------------------------------");

usuarioConectado = true;
console.log("String()----------------------------------------");
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
console.log("----------------------------------------");

//Number()

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log("Number()----------------------------------------");
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação
console.log("----------------------------------------");

let largura2 = "10";
let altura2 = "5";
console.log("Number()----------------------------------------");
console.log( + largura2 * + altura2); // teremos a conversão de String para números realizado usando o + antes das variáveis
console.log("----------------------------------------");

let meuNome = "leonardo";
console.log("Number()----------------------------------------");
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
console.log("----------------------------------------");

let usuarioConectado2 = false;
console.log("Number()----------------------------------------");
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.
console.log("----------------------------------------");



