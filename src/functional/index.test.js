import {
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatches,
  multiMap,
  commutative,
  objFilter,
  rating,
  pipe,
  highestFunc,
} from './index';

describe('addTwo', () => {
  it('should return 3 when it is passed 1 as argument, adding 2 to the value', () => {
    const result = addTwo(1);

    expect(result).toBe(3);
  });

  it('should return 0 when it is passed -2 as argument, adding 2 to the value', () => {
    const result = addTwo(-2);

    expect(result).toBe(0);
  });

  it('should return 10 when it is passed 8 as argument, adding 2 to the value', () => {
    const result = addTwo(8);

    expect(result).toBe(10);
  });
});

describe('addS', () => {
  it('should return tests when it is passed test as argument', () => {
    const result = addS('test');

    expect(result).toBe('tests');
  });

  it('should return s when it is passed an empty string as argument', () => {
    const result = addS('');

    expect(result).toBe('s');
  });
});

describe('map', () => {
  it('should return an array with duplicated numbers when its passed an array of number and a callback function that should change all items numbers, e.g. duplicate', () => {
    const items = [1, 2, 3, 4, 5];

    const duplicate = (number) => number * 2;

    const result = map(items, duplicate);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('should return an array with divided numbers when its passed an array of number and a callback function that should change all items numbers, e.g. divide', () => {
    const items = [1, 2, 3, 4, 5];

    const divide = (number) => number / 2;

    const result = map(items, divide);

    expect(result).toEqual([0.5, 1, 1.5, 2, 2.5]);
  });

  it('should return an array with value summed with 2, when its passed an array of number and a callback function that should change all items numbers, e.g. add2', () => {
    const items = [1, 2, 3, 4, 5];

    const result = map(items, addTwo);

    expect(result).toEqual([3, 4, 5, 6, 7]);
  });
});

describe('forEach', () => {
  it('should call the callback function with all items of array', () => {
    const letters = ['a', 'b', 'c', 'd'];

    let alphabet = '';

    forEach(letters, (char) => (alphabet += char));

    expect(alphabet).toBe('abcd');
  });
});

describe('mapWith', () => {
  it('should return an array with duplicated numbers when its passed an array of number and a callback function that should change all items numbers, e.g. duplicate', () => {
    const items = [1, 2, 3, 4, 5];

    const duplicate = (number) => number * 2;

    const result = mapWith(items, duplicate);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('should return an array with divided numbers when its passed an array of number and a callback function that should change all items numbers, e.g. divide', () => {
    const items = [1, 2, 3, 4, 5];

    const divide = (number) => number / 2;

    const result = mapWith(items, divide);

    expect(result).toEqual([0.5, 1, 1.5, 2, 2.5]);
  });

  it('should return an array with value summed with 2, when its passed an array of number and a callback function that should change all items numbers, e.g. add2', () => {
    const items = [1, 2, 3, 4, 5];

    const result = mapWith(items, addTwo);

    expect(result).toEqual([3, 4, 5, 6, 7]);
  });
});

describe('reduce', () => {
  it('should the sum of all items, in this case, when passed 4, 1, 3, should return 8', () => {
    const items = [4, 1, 3];

    const add = (a, b) => a + b;

    const result = reduce(items, add, 0);

    expect(result).toBe(8);
  });
});

describe('intersection', () => {
  it('should return the items that exists in all arrays with 2 arrays as arguments', () => {
    const array1 = [4, 1, 3];
    const array2 = [1, 4, 10, 5, 6];

    const result = intersection(array1, array2);

    expect(result).toEqual([1, 4]);
  });

  it('should return the items that exists in all arrays with 3 arrays as arguments', () => {
    const result = intersection(
      [5, 10, 15, 20],
      [15, 88, 1, 5, 7],
      [1, 10, 15, 5, 20]
    );

    expect(result).toStrictEqual([15, 5]);
  });
});

describe('union', () => {
  it('should return a new array with all items, ignoring duplicated values', () => {
    const result = union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]);

    expect(result).toEqual([5, 10, 15, 88, 1, 7, 100]);
  });
});

describe('objOfMatches', () => {
  it('should return a new array with all items, ignoring duplicated values', () => {
    const result = objOfMatches(
      ['hi', 'howdy', 'bye', 'later', 'hello'],
      ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
      (str) => str.toUpperCase()
    );

    expect(result).toEqual({ hi: 'HI', bye: 'BYE', later: 'LATER' });
  });
});

describe('multiMap', () => {
  it(`should return a new object, with each value of the array being the key, and the value being an array
      of the key changed by the second argument, an array of callbacks`, () => {
    const result = multiMap(
      ['catfood', 'glue', 'beer'],
      [
        (str) => str.toUpperCase(),
        (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
        (str) => str + str,
      ]
    );

    expect(result).toEqual({
      catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
      glue: ['GLUE', 'Glue', 'glueglue'],
      beer: ['BEER', 'Beer', 'beerbeer'],
    });
  });
});

describe('commutative', () => {
  const multBy3 = (n) => n * 3;
  const divBy4 = (n) => n / 4;
  const subtract5 = (n) => n - 5;

  it('should return true if the value, after being executed by the two callbacks in an order and then reversed, the result is the same', () => {
    const result = commutative(multBy3, divBy4, 11);

    expect(result).toBe(true);
  });

  it('should return false if the value, after being executed by the two callbacks in an order and then reversed, the result is not the same', () => {
    const result = commutative(multBy3, subtract5, 48);

    expect(result).toBe(false);
  });
});

describe('objFilter', () => {
  it(`should filter the object keys and return in the new object, if the result of the call of callback
      function with the key as argument is equal than the original value of that key.`, () => {
    const startingObj = {};
    startingObj[6] = 3;
    startingObj[2] = 1;
    startingObj[12] = 4;
    const half = (n) => n / 2;

    const result = objFilter(startingObj, half);

    expect(result).toEqual({ 2: 1, 6: 3 });
  });
});

describe('rating', () => {
  it(`should the porcentage of function that returned true, based on the value argument`, () => {
    const isEven = (n) => n % 2 === 0;
    const greaterThanFour = (n) => n > 4;
    const isSquare = (n) => Math.sqrt(n) % 1 === 0;
    const hasSix = (n) => n.toString().includes('6');
    const checks = [isEven, greaterThanFour, isSquare, hasSix];

    const result1 = rating(checks, 64);
    const result2 = rating(checks, 66);

    expect(result1).toBe(100);
    expect(result2).toBe(75);
  });
});

describe('pipe', () => {
  it(`should return the value, after pass in all functions of argument, using the result from one as argument to another`, () => {
    const capitalize = (str) => str.toUpperCase();
    const addLowerCase = (str) => str + str.toLowerCase();
    const repeat = (str) => str + str;
    const capAddlowRepeat = [capitalize, addLowerCase, repeat];

    const result = pipe(capAddlowRepeat, 'cat');

    expect(result).toBe('CATcatCATcat');
  });
});

describe('highestFunc', () => {
  it(`should return the value, after pass in all functions of argument, using the result from one as argument to another`, () => {
    const groupOfFuncs = {};
    groupOfFuncs.double = (n) => n * 2;
    groupOfFuncs.addTen = (n) => n + 10;
    groupOfFuncs.inverse = (n) => n * -1;

    const result1 = highestFunc(groupOfFuncs, 5);
    const result2 = highestFunc(groupOfFuncs, 11);
    const result3 = highestFunc(groupOfFuncs, -20);

    expect(result1).toBe('addTen');
    expect(result2).toBe('double');
    expect(result3).toBe('inverse');
  });
});
