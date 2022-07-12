/**********
Esercizio 1
**********/

const word = (prompt('Inserisci una parola e verifica se è palindroma.')).toLowerCase();
const wordComponent = word.split('');

console.log(wordComponent);

let wordNorm = [];
let wordRev = [];

for (let i = 0; i < wordComponent.length; i++) {
    wordNorm += wordComponent[i];
}
console.log(wordNorm);

for (let i = wordComponent.length - 1; i >= 0; i--) {
    wordRev += wordComponent[i];
}
console.log(wordRev);

verifyPal(wordNorm, wordRev);

function verifyPal(parola_1, parola_2) {
    if (parola_1 == parola_2) {
        alert('La parola è palindroma!')
    } else {
        alert('La parola non è palindroma.')
    }
}



/**********
Esercizio 2
**********/

const numType = prompt('Scegli pari o dispari.').toLowerCase();
const numUser = parseInt(prompt('Scegli un numero da 1 a 5.'));
const numComp = randomRangeNumber(10, 20);

console.log('Scelta tipo: ' + numType);
console.log('Scelta numero: ' + numUser);
console.log('Numero casuale compute: ' + numComp);

const numSum = numUser + numComp;
let result;

console.log('Somma dei numeri: ' + numSum);

numberType();

console.log('Tipo numero somma: ' + result);

if (result == numType) {
    alert('Hai vinto.')
} else {
    alert('Hai perso.')
}

function randomRangeNumber(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNum;
}

function numberType () {
    if (numSum % 2 == 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}