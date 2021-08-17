import { map } from './index';
import { addTwo } from '../challenge1/index.js';

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
