function computePerimeterOfARectangle(length: number, width: number): number {
  // your code here
  let perimeter = 2 * (length + width);
  return perimeter;
}

let output = computePerimeterOfARectangle(5, 2);
console.log(output);

export {};
