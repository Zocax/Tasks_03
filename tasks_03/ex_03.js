const prompt = require("prompt-sync")();

var option = Number(prompt("Qual o valor da opção? "))

if (option >= 1 && option <= 3){

if (option === 1) {
    console.log("Valor de option é: " + option);
}
if (option === 2) {
    console.log("Valor de option é: " + option);
}
if (option === 3) {
    console.log("Valor de option é: " + option);
}
} else {
    console.log(`Insira um número entre 1 a 3.`);
}