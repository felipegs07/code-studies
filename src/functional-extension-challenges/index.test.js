import {
  functionValidator,
  allClear,
  numSelectString,
  movieSelector,
  curriedAddThreeNums,
  curriedAddTwoNumsToFive,
} from './index';

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

describe('numSelectString', () => {
  it('should return the odd numbers in ascending order in a string when the argument is an array of numbers', () => {
    const nums = [17, 34, 3, 12];

    const result = numSelectString(nums);

    expect(result).toBe('3, 17');
  });
});

describe('movieSelector', () => {
  it('should return the movies titles that the score is higher than 5, the title should be uppercase', () => {
    const movies = [
      { id: 1, title: "Pan's Labyrinth", score: 9 },
      { id: 37, title: 'Manos: The Hands of Fate', score: 2 },
      { title: 'Air Bud', score: 5 },
      { title: 'Hackers', score: 7 },
    ];

    const result = movieSelector(movies);

    expect(result).toEqual(["PAN'S LABYRINTH", 'HACKERS']);
  });
});

describe('curriedAddThreeNums', () => {
  it('should return sum of the three curried functions arguments', () => {
    const result = curriedAddThreeNums(3)(-1)(1);

    expect(result).toBe(3);
  });
});

describe('curriedAddTwoNumsToFive', () => {
  it('should return sum of the two curried functions argument + 5', () => {
    const result = curriedAddTwoNumsToFive(6)(7);

    expect(result).toBe(18);
  });
});
