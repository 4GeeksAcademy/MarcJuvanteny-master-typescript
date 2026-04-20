"use strict";
function isOldEnoughToVote(age) {
    // Cambiamos el nombre a 'isOldEnoughToVote'
    // Cambiamos la condición a '>= 18'
    return age >= 18;
}
// Ejemplo de uso para probarlo:
let output = isOldEnoughToVote(22);
console.log(output); // --> true
let outputMenor = isOldEnoughToVote(17);
console.log(outputMenor); // --> false
