"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAverageOfNumbers(nums, arg2, arg3) {
    // your code here
    const validNumbers = nums.filter((num) => typeof num === "number");
    if (validNumbers.length === 0) {
        return 0;
    }
    const sum = validNumbers.reduce((acc, num) => acc + num, 0);
    return sum / validNumbers.length;
    return 0;
}
