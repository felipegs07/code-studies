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
export const multiMap = (arrVals, arrCallbacks) => {
  const runCallbacks = (callbacks, input) => {
    let finalValue = [];

    forEach(callbacks, (callback) => {
      finalValue = [...finalValue, callback(input)];
    });

    return finalValue;
  };

  const addObjectKeys = (accumulator, item) => {
    const objectWithNewKey = {
      ...accumulator,
      [item]: runCallbacks(arrCallbacks, item),
    };

    return objectWithNewKey;
  };

  const returnObject = reduce(arrVals, addObjectKeys, {});

  return returnObject;
};

// Challenge 11
export const commutative = (func1, func2, value) => {
  const executeInOrder = (callbackA, callbackB, inputValue) => {
    const temporaryValue = callbackA(inputValue);
    const finalValue = callbackB(temporaryValue);

    return finalValue;
  };

  const firstResult = executeInOrder(func1, func2, value);
  const secondResult = executeInOrder(func2, func1, value);

  return firstResult === secondResult;
};

// Challenge 12
export const objFilter = (obj, callback) => {
  const keys = Object.keys(obj);

  const newObject = reduce(
    keys,
    (accumulator, item) => {
      const result = callback(item);

      return result === obj[item]
        ? {
            ...accumulator,
            [item]: result,
          }
        : accumulator;
    },
    {}
  );

  return newObject;
};

// Challenge 13
export const rating = (arrOfFuncs, value) => {
  let trueReturns = 0;

  forEach(arrOfFuncs, (callback) => {
    const callbackReturn = callback(value);

    if (callbackReturn === true) {
      trueReturns += 1;
    }
  });

  const percentage = (trueReturns / arrOfFuncs.length) * 100;

  return percentage;
};

// Challenge 14
export const pipe = (arrOfFuncs, value) => {
  const newValue = reduce(
    arrOfFuncs,
    (accumulator, callback) => {
      return callback(accumulator);
    },
    value
  );

  return newValue;
};

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {};
