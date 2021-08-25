import { addTwo, addS, map, forEach, mapWith, reduce } from './index';

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
