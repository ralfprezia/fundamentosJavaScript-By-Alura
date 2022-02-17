let input = null;

if (input === null) {
 console.log("-----------------------------------------");
 console.log('não há informação');
} else {
 console.log(input);
}


let input2 = null;
let input3;

console.log("-----------------------------------------");
console.log(input2); // null
console.log(input3); // undefined


console.log("-----------------------------------------");
console.log(null == undefined); // true
console.log(null === undefined); // false