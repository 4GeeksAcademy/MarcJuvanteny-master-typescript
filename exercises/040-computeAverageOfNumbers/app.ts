function computeAverageOfNumbers(nums: unknown[], arg2: number, arg3: unknown): number {
  // your code here
  const validNumbers = nums.filter((num): num is number => typeof num === "number");
  if (validNumbers.length === 0) {
    return 0;
  }
  const sum = validNumbers.reduce((acc, num) => acc + num, 0);
  return sum / validNumbers.length;



  return 0;
}

export {};
