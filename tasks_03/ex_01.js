const prompt = require("prompt-sync")();

var numberOne = Number(prompt("Qual o primeiro número? "))
var numberTwo = Number(prompt("Qual o segundo número? "))

if (numberOne === numberTwo) {
    console.log(`Os números são iguais`);
} else {
    console.log(`Os números são diferentes`);
}
if (numberOne > numberTwo) {
    console.log(`O maior é ${numberOne}
O menor é ${numberTwo}`);
} else {
    console.log(`O maior é: ${numberTwo}
O menor é: ${numberOne}`);
}