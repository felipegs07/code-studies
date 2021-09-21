import { reduce } from '../functional/index';

// Challenge 1
export const functionValidator = (funcArr, input, output) => {
  const newFuncArr = reduce(
    funcArr,
    (accumulator, item) => {
      const result = item(input);

      return result === output ? [...accumulator, item] : accumulator;
    },
    []
  );

  return newFuncArr;
};

// Challenge 2
export const allClear = (funcArr, value) => {
  const response = reduce(
    funcArr,
    (lastValue, actualFunc) => {
      if (lastValue !== false) {
        return actualFunc(value);
      }

      return lastValue;
    },
    true
  );

  return response;
};

// Challenge 3
export const numSelectString = (numArr) => {
  const oddNumbers = numArr
    .filter((number) => number % 2 !== 0)
    .sort((a, b) => {
      return a - b;
    });

  const selectedString = oddNumbers.reduce((accumulator, item) => {
    return accumulator ? `${accumulator}, ${item}` : `${item}`;
  }, '');

  return selectedString;
};

// Challenge 4
export const movieSelector = (moviesArr) => {
  const movies = moviesArr
    .filter((item) => {
      return item.score > 5;
    })
    .reduce((accumulator, item) => {
      const uppercaseTitle = item.title.toUpperCase();
      return [...accumulator, uppercaseTitle];
    }, []);

  return movies;
};

// Challenge 5
export const curriedAddThreeNums = (num1) => (num2) => (num3) =>
  num1 + num2 + num3;

// Challenge 6
export const curriedAddTwoNumsToFive = (num1) => (num2) => num1 + num2 + 5;
