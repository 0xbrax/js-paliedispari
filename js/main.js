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