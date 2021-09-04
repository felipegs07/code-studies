// Challenge 1
export const createFunction = () => () => console.log('hello');

// Challenge 2
export const createFunctionPrinter = (input) => () => console.log(input);

// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

// Challenge 4
export const addByX = (x) => (y) => y + x;

const addByTwo = addByX(2);

// now call addByTwo with an input of 1

// now call addByTwo with an input of 2

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
const makeFuncTester = (arrOfTests) => {};

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true

// Challenge 11
const makeHistory = (limit) => {};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'

// Challenge 12
const blackjack = (array) => {};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
