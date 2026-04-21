"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computePerimeterOfARectangle(length, width) {
    // your code here
    let perimeter = 2 * (length + width);
    return perimeter;
}
let output = computePerimeterOfARectangle(5, 2);
console.log(output);
