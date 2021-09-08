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
const numSelectString = (numArr) => {};

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {};

// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]

// Challenge 5
const curriedAddThreeNums = (num1) => {};

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3

// Challenge 6
// const curriedAddTwoNumsToFive = ?

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
