import { addTwo } from './index';

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
