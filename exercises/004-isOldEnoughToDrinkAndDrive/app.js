"use strict";
function isOldEnoughToDrinkAndDrive(age) {
    // your code here
    return age >= 18 && age >= 21 && age >= 16 ? false : false;
}
let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> False
let outputJoven = isOldEnoughToDrinkAndDrive(17);
console.log(outputJoven); // --> false
