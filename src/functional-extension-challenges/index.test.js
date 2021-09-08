import { functionValidator, allClear } from './index';

describe('functionValidator', () => {
  it('should return an array with the function that, after been called with the input argument, the result is equal the output argument', () => {
    const addFive = (num) => num + 5;
    const multiplyByTwo = (num) => num * 2;
    const subtractOne = (num) => num - 1;
    const fnArr = [addFive, multiplyByTwo, subtractOne];

    const result = functionValidator(fnArr, 5, 10);

    expect(result).toEqual([addFive, multiplyByTwo]);
  });
});

describe('allClear', () => {
  it('should return true if all the functions of the array returns true, but if one of them returns false, should return false', () => {
    const isOdd = (num) => num % 2 === 1;
    const isPositive = (num) => num > 0;
    const multipleOfFive = (num) => num % 5 === 0;
    const numFnArr = [isOdd, isPositive, multipleOfFive];

    const result1 = allClear(numFnArr, 25);
    const result2 = allClear(numFnArr, -25);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});
