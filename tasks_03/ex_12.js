const prompt = require("prompt-sync")();

var day = Number(prompt("Escreva aqui o primeiro dia: "));
var month = Number(prompt("Escreva aqui o primeiro mes: "));
var year = Number(prompt("Escreva aqui o primeiro ano: "));

var callDay = day - 1
var callmonth = (month * 30) - (1 * 30)
var callyear = (year * 30 * 12 ) - (1960 * 30 * 12)
var call = callDay + callmonth + callyear

if (day >= 1 && month >= 1 && day <= 30 && month <= 12) {
    console.log(`Os dias entre ${day}/${month}/${year} e 1/1/1960 é ${call} dias`);
} else {
    console.log("Erro!!! Data tem que ser maior ou igual do que a data do dia 1/1/1960")();
}