function isEitherEven(n1: number, n2: number): boolean {
  // your code here
  if (n1 % 2 === 0 || n2 % 2 === 0){
    return true;
  } else {  
  return false;
  }
}

let output = isEitherEven(1, 4);
console.log(output);
