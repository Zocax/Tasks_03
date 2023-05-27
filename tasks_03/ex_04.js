const prompt = require("prompt-sync")();

var meters = Number(prompt("Quantos metros é o tamanho da pista? "))
var timeCar1 = Number(prompt("Quanto tempo o 1° carro demorou para percorrer a pista? "))
var timeCar2 = Number(prompt("Quanto tempo o 2° carro demorou para percorrer a pista? "))
var speedCar1 = meters / timeCar1
var speedCar2 = meters / timeCar2

console.log(`Velocidade do carro 1: ${speedCar1} metros por segundo
Velocidade do carro 2: ${speedCar2} metros por segundo`);
