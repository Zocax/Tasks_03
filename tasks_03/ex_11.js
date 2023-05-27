const prompt = require("prompt-sync")();

var dayOne = Number(prompt("Escreva aqui o primeiro dia: "));
var monthOne = Number(prompt("Escreva aqui o primeiro mes: "));
var yearOne = Number(prompt("Escreva aqui o primeiro ano: "));
var dayTwo = Number(prompt("Escreva aqui o segundo dia: "));
var monthTwo = Number(prompt("Escreva aqui o segundo mes: "));
var yearTwo = Number(prompt("Escreva aqui o segundo ano: "));

var CallculationMonthOne = Number(monthOne * 30);
var CallculationYearOne = Number((yearOne * 30) * 12);
var CallculationMonthTwo = Number(monthTwo * 30);
var CallculationYearTwo = Number((yearTwo * 30) * 12);
var CallculationOne = Number(CallculationMonthOne + CallculationYearOne + dayOne);
var CallculationTwo = Number(CallculationMonthTwo + CallculationYearTwo + dayTwo);
var CallculationDayOne = Number(CallculationTwo - CallculationOne)
var CallculationDayTwo = Number(CallculationOne - CallculationTwo)

if (CallculationOne < CallculationTwo) {
    console.log(`Se pessaram ${CallculationDayOne} dias entre as datas.`);
} else {
    console.log(`Se pessaram ${CallculationDayTwo} dias entre as datas.`);
}
