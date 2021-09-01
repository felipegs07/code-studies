import { createFunction, createFunctionPrinter } from './index';

describe('closure', () => {
  console.log = jest.fn();

  describe('createFunction', () => {
    it('should return a function that when it is called, should console.log the word hello', () => {
      const functionSample = createFunction();

      functionSample();

      expect(console.log).toHaveBeenCalledWith('hello');
    });
  });

  describe('createFunctionPrinter', () => {
    it('should return a function that when it is called, should print on console.log the argument of the first function', () => {
      const functionSample = createFunctionPrinter('test');

      functionSample();

      expect(console.log).toHaveBeenCalledWith('test');
    });
  });
});
