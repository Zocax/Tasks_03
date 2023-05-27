const prompt = require("prompt-sync")();

var valueOne = Number(prompt("Escreva o primeiro value: "))
var valueTwo = Number(prompt("Escreva o segundo value: "))
var valueThree = Number(prompt("Escreva o terceiro value: "))

if (valueOne < valueTwo && valueOne < valueThree) {
    console.log(valueOne);
} else if (valueTwo < valueThree && valueTwo < valueOne) {
    console.log(valueTwo);
} else if (valueThree < valueOne && valueThree < valueTwo) {
    console.log(valueThree);
}
if (valueOne > valueTwo && valueOne < valueThree) {
    console.log(valueOne);
} else if (valueTwo > valueThree && valueTwo < valueOne) {
    console.log(valueTwo);
} else if (valueThree > valueOne && valueThree < valueTwo) {
    console.log(valueThree);
}
if (valueOne < valueTwo && valueOne > valueThree) {
    console.log(valueOne);
} else if (valueTwo < valueThree && valueTwo > valueOne) {
    console.log(valueTwo);
} else if (valueThree < valueOne && valueThree > valueTwo) {
    console.log(valueThree);
}
if (valueOne > valueTwo && valueOne > valueThree) {
    console.log(valueOne);
} else if (valueTwo > valueThree && valueTwo > valueOne) {
    console.log(valueTwo);
} else if (valueThree > valueOne && valueThree > valueTwo) {
    console.log(valueThree);
}