"use strict";
function isEitherEven(n1, n2) {
    // your code here
    if (n1 % 2 === 0 || n2 % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let output = isEitherEven(1, 4);
console.log(output);
