import { addS } from './index';

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
