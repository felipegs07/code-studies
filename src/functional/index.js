// Challenge 1
export const addTwo = (number) => number + 2;

// Challenge 2
export const addS = (word) => `${word}s`;

// Challenge 3
export const map = (items, callback) => {
  const mapping = (items, callback, index, newItems) => {
    if (index === items.length) {
      return newItems;
    }

    const newValue = callback(items[index]);

    return mapping(items, callback, index + 1, [...newItems, newValue]);
  };

  return mapping(items, callback, 0, []);
};

// Challenge 4
export const forEach = (array, callback) => {
  const forLoop = (items, index) => {
    if (index === items.length) {
      return;
    }

    callback(items[index]);

    forLoop(items, index + 1);
  };

  forLoop(array, 0);
};

// Challenge 5
export const mapWith = (array, callback) => {
  let newArray = [];

  const addNewItem = (item) => {
    const newItem = callback(item);
    newArray = [...newArray, newItem];
  };

  forEach(array, addNewItem);

  return newArray;
};

// Challenge 6
export const reduce = (array, callback, initialValue) => {
  const loop = (items, callback, value, index) => {
    if (index === items.length) {
      return value;
    }

    const newValue = callback(value, items[index]);

    return loop(items, callback, newValue, index + 1);
  };

  return loop(array, callback, initialValue, 0);
};

// Challenge 7
const has = (array, comparisonItem) => {
  let status = false;

  const verify = (item) => {
    if (status === false && item === comparisonItem) {
      status = true;
    }
  };

  forEach(array, verify);

  return status;
};

export const intersection = (...arrays) => {
  const loopIntersection = (array, index, value) => {
    if (index === arrays.length) {
      return value;
    }

    const verifyIntersection = (accumulator, nextItem) => {
      const itemIsIntersection = has(value, nextItem);

      return itemIsIntersection ? [...accumulator, nextItem] : accumulator;
    };

    const newValue = reduce(array, verifyIntersection, []);

    const nextIndex = index + 1;

    return loopIntersection(arrays[nextIndex], nextIndex, newValue);
  };

  return loopIntersection(arrays[1], 1, arrays[0]);
};

// Challenge 8
export const union = (...arrays) => {
  const loopUnion = (array, index, value) => {
    if (index === arrays.length) {
      return value;
    }

    const verifyDuplicatedValue = (accumulator, nextItem) => {
      const itemExists = has(accumulator, nextItem);

      return itemExists ? accumulator : [...accumulator, nextItem];
    };

    const newValue = reduce(array, verifyDuplicatedValue, value);

    const nextIndex = index + 1;

    return loopUnion(arrays[nextIndex], nextIndex, newValue);
  };

  return loopUnion(arrays[1], 1, arrays[0]);
};

// Challenge 9
export const objOfMatches = (array1, array2, callback) => {
  let object = {};

  for (let i = 0; i < array1.length; i++) {
    const itemConverted = callback(array1[i]);

    if (itemConverted === array2[i]) {
      object = {
        ...object,
        [array1[i]]: array2[i],
      };
    }
  }

  return object;
};

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter = (obj, callback) => {};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
const rating = (arrOfFuncs, value) => {};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 14
const pipe = (arrOfFuncs, value) => {};

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {};
