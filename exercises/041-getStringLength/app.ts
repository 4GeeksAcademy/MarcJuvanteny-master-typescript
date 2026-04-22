function getStringLength(string: string): number {
  // your code here
  let count = 0;

  for (const _char of string) {
    count++;
  }

  return count;
}

export {};
