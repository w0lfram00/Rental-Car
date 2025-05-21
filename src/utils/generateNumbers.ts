export const generateNumbers = (
  from: number,
  to: number,
  step: number
): Array<number> => {
  const numbers: Array<number> = [];
  for (let i = from; i <= to; i += step) {
    numbers.push(i);
  }
  return numbers;
};
