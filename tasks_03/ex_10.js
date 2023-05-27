const prompt = require("prompt-sync")();

var d = Number(prompt("Escreva o dia: "))
var m = Number(prompt("Escreva o mes: "))
var y = Number(prompt("Escreva o ano: "))

if (d > 29 && m == 2 && y % 4 == 0) {
    console.log("O mes de fervereiro so tem 29 dias.");
}else if (m == 4 || m == 6 || m == 9 || m == 11 && d > 30){
    console.log("O mes inserido possui apenas 30 dias");
}else if (d > 0 && d <= 31 && m > 0 && m <= 12 && y % 4 == 0) {
if (true) {
    console.log(`${y} é um ano bissexto. Data é valida`);
}
}
if (d > 28 && m == 2 && y % 4 !== 0) {
    console.log("O mes de fervereiro so tem 28 dias.");
} else if (y % 4 != 0 && d > 0 && d <= 31 && m > 0 && m <= 12) {
    if (true) {
        console.log(`${y} não é um ano bissexto. Data é valida`);
    }
}
if (d < 0 || d > 31 || m < 0 || m > 12) {
    console.log(`Data não é valida`);
}