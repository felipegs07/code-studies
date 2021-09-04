import {
  createFunction,
  createFunctionPrinter,
  addByX,
  once,
  after,
  delay,
  russianRoulette,
  average,
} from './index';

describe('closure', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

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

  describe('addByX', () => {
    it('should return a function that receive an argument and sum with the X argument of the addByX function ', () => {
      const addByTwo = addByX(2);
      const addByThree = addByX(3);
      const addByFour = addByX(4);

      expect(addByTwo(3)).toBe(5);
      expect(addByThree(4)).toBe(7);
      expect(addByFour(10)).toBe(14);
    });
  });

  describe('once', () => {
    it(`should return a function that receive a function argument and call that in the first execution of this returned function,
        then, in the other calls, just return the first generated value`, () => {
      const addByTwo = addByX(2);

      const onceFunc = once(addByTwo);

      expect(onceFunc(4)).toBe(6);
      expect(onceFunc(10)).toBe(6);
      expect(onceFunc(9001)).toBe(6);
    });
  });

  describe('after', () => {
    it('should call the function argument, just when the returned function be called the number of time of the count argument', () => {
      const called = () => console.log('after');
      const afterCalled = after(3, called);

      afterCalled();
      afterCalled();
      afterCalled();

      expect(console.log).toHaveBeenCalledWith('after');
    });

    it('should not call the function argument, if the returned function is not called the time of the count argument', () => {
      const called = () => console.log('after');
      const afterCalled = after(3, called);

      afterCalled();

      expect(console.log).not.toHaveBeenCalled();
    });
  });

  describe('delay', () => {
    it('should call the function argument, just when the returned function be called the number of time of the count argument', () => {
      jest.useFakeTimers();
      const mockedFunc = jest.fn();
      const delayedFunction = delay(mockedFunc, 1000);

      delayedFunction();

      expect(mockedFunc).not.toHaveBeenCalled();

      jest.runAllTimers();

      expect(mockedFunc).toHaveBeenCalled();
    });
  });

  describe('russianRoulette', () => {
    it('should call the function argument, just when the returned function be called the number of time of the count argument', () => {
      const play = russianRoulette(3);
      const result1 = play();
      const result2 = play();
      const result3 = play();
      const result4 = play();

      expect(result1).toBe('click');
      expect(result2).toBe('click');
      expect(result3).toBe('bang');
      expect(result4).toBe('reload to play again');
    });
  });

  describe('average', () => {
    it(`should return a function that accepts a number argument, and if we send a new number, should calculate the average with the previous numbers,
        if not, just return the last calculated number`, () => {
      const avgSoFar = average();
      const result1 = avgSoFar();
      const result2 = avgSoFar(4);
      const result3 = avgSoFar(8);
      const result4 = avgSoFar();
      const result5 = avgSoFar(12);
      const result6 = avgSoFar();

      expect(result1).toBe(0);
      expect(result2).toBe(4);
      expect(result3).toBe(6);
      expect(result4).toBe(6);
      expect(result5).toBe(8);
      expect(result6).toBe(8);
    });
  });
});
