// Challenge 1
export const createFunction = () => () => console.log('hello');

// Challenge 2
export const createFunctionPrinter = (input) => () => console.log(input);

// Challenge 3
export const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  };
  return incrementCounter;
};

// Challenge 4
export const addByX = (x) => (y) => y + x;

// Challenge 5
export const once = (func) => {
  let value = undefined;
  let isFirstTime = false;

  return (x) => {
    if (isFirstTime === false) {
      value = func(x);
      isFirstTime = true;
    }

    return value;
  };
};

// Challenge 6
export const after = (count, func) => {
  let internalCounter = 0;

  return () => {
    internalCounter += 1;

    if (internalCounter === count) {
      func();
    }
  };
};

// Challenge 7
export const delay = (func, wait, ...args) => {
  return () => {
    setTimeout(() => {
      func(args);
    }, wait);
  };
};

// Challenge 8
export const russianRoulette = (num) => {
  let counter = 0;

  return () => {
    counter += 1;

    if (counter < num) {
      return 'click';
    } else if (counter === num) {
      return 'bang';
    } else {
      return 'reload to play again';
    }
  };
};

// Challenge 9
export const average = () => {
  let numbers = [];
  let lastAverage = 0;

  return (newNumber) => {
    if (newNumber != undefined) {
      numbers = [...numbers, newNumber];
    } else {
      return lastAverage;
    }

    const numbersSum = numbers.reduce((accumulator, item) => {
      return accumulator + item;
    }, 0);

    const newAverage = numbersSum / numbers.length;
    lastAverage = newAverage;

    return newAverage;
  };
};

// Challenge 10
export const makeFuncTester = (arrOfTests) => {
  return (callback) => {
    for (let i = 0; i < arrOfTests.length; i++) {
      const [itemA, itemB] = arrOfTests[i];
      const itemAAfterCallback = callback(itemA);

      if (itemAAfterCallback !== itemB) {
        return false;
      }
    }

    return true;
  };
};

// Challenge 11
export const makeHistory = (limit) => {
  let items = [];

  const formatItemName = (name, status) => {
    return status === true ? `${name} done` : `${name} undone`;
  };

  const addItem = (item) => {
    if (items.length < limit) {
      items = [...items, item];
    } else {
      const oldItemsWithoutLastItem = items.slice(1, limit);

      items = [...oldItemsWithoutLastItem, item];
    }

    return formatItemName(item, true);
  };

  const removeItem = (item) => {
    const lastItemIndex = items.length - 1;
    const newItems = items.slice(0, lastItemIndex);
    items = [...newItems];

    return formatItemName(item, false);
  };

  return (command) => {
    if (command === 'undo') {
      if (items.length === 0) {
        return 'nothing to undo';
      }

      const lastItemIndex = items.length - 1;
      const lastItem = items[lastItemIndex];

      return removeItem(lastItem);
    } else {
      return addItem(command);
    }
  };
};

// Challenge 12
export const blackjack = (array) => {
  let index = 0;
  let playersIndex = 0;
  const players = {};

  return (item1, item2) => {
    const initialValue = item1 + item2;
    players[playersIndex] = initialValue;
    const playerReference = playersIndex;
    playersIndex += 1;
    let firstCall = true;

    return () => {
      const actualPlayerValue = players[playerReference];

      if (firstCall === true) {
        firstCall = false;
        return initialValue;
      }

      if (actualPlayerValue > 21) {
        return 'you are done!';
      } else {
        const actualItem = array[index];
        const newValue = actualItem + actualPlayerValue;
        index += 1;

        players[playerReference] = newValue;

        return newValue > 21 ? 'bust' : newValue;
      }
    };
  };
};
