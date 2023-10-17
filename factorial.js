const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número: "));


if (isNaN(numero)) {
    console.log('Entrada inválida. Debes ingresar un número válido.');
} else {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    console.log(`El factorial de ${numero} es ${factorial}`);
}