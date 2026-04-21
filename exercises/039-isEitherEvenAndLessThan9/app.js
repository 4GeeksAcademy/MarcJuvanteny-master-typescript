"use strict";
function isEitherEvenAndLessThan9(num1, num2) {
    // First, check if both numbers are less than 9
    const bothLessThan9 = num1 < 9 && num2 < 9;
    // Second, check if at least one number is even
    const eitherIsEven = num1 % 2 === 0 || num2 % 2 === 0;
    // Both conditions must be true
    return bothLessThan9 && eitherIsEven;
}
// Test cases
console.log(isEitherEvenAndLessThan9(2, 4)); // true (Both < 9, at least one even)
console.log(isEitherEvenAndLessThan9(72, 2)); // false (72 is not < 9)
console.log(isEitherEvenAndLessThan9(3, 5)); // false (Both < 9, but none are even)
