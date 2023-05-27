const prompt = require("prompt-sync")();

var yearOne = Number(prompt("Escreva o primeiro ano: "))
var yearTwo = Number(prompt("Escreva o segundo ano: "))

if (yearOne < yearTwo) {
    console.log(yearOne , yearTwo);
} else {
    console.log(yearTwo , yearOne);
}
