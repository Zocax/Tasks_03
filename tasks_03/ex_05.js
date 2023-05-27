const prompt = require("prompt-sync")();

var numberOne = Number(prompt("Qual o 1° número? "))
var numberTwo = Number(prompt("Qual o 2° número? "))
var numberThree = Number(prompt("Qual o 3° número? "))

if (numberOne === numberTwo && numberOne === number) {
    console.log(`Números sao iguais.`);
}
if (numberOne < numberTwo && numberOne < numberThree) {
    console.log(`O menor é o opção 1.`);
} else {
if (numberTwo < numberOne && numberTwo < numberThree) {
    console.log(`O menor é o opção 2.`);
} else if (numberThree < numberOne && numberThree < numberTwo){
    console.log(`O menor é o opção 3.`);
}
}
