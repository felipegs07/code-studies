import {
  createFunction,
  createFunctionPrinter,
  addByX,
  once,
  after,
  delay,
  russianRoulette,
  average,
  makeFuncTester,
  makeHistory,
  blackjack,
} from './index';

describe('closure with console.log mocked', () => {
  const originalConsoleLog = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
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
});

describe('closure without console.log mocked', () => {
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

  describe('makeFuncTester', () => {
    it(`should return true when the first item of the argument array, after begin used as
        argument of the callback function, returns the same of the second item`, () => {
      const capLastTestCases = [];
      capLastTestCases.push(['hello', 'hellO']);
      capLastTestCases.push(['goodbye', 'goodbyE']);
      capLastTestCases.push(['howdy', 'howdY']);

      const shouldCapitalizeLast = makeFuncTester(capLastTestCases);

      const capLastAttempt1 = (str) => str.toUpperCase();
      const capLastAttempt2 = (str) =>
        str.slice(0, -1) + str.slice(-1).toUpperCase();

      expect(shouldCapitalizeLast(capLastAttempt1)).toBe(false);
      expect(shouldCapitalizeLast(capLastAttempt2)).toBe(true);
    });
  });

  describe('makeHistory', () => {
    it(`should return true when the first item of the argument array, after begin used as
        argument of the callback function, returns the same of the second item`, () => {
      const myActions = makeHistory(2);
      const result1 = myActions('jump');
      const result2 = myActions('undo');
      const result3 = myActions('walk');
      const result4 = myActions('code');
      const result5 = myActions('pose');
      const result6 = myActions('undo');
      const result7 = myActions('undo');
      const result8 = myActions('undo');

      expect(result1).toBe('jump done');
      expect(result2).toBe('jump undone');
      expect(result3).toBe('walk done');
      expect(result4).toBe('code done');
      expect(result5).toBe('pose done');
      expect(result6).toBe('pose undone');
      expect(result7).toBe('code undone');
      expect(result8).toBe('nothing to undo');
    });
  });

  describe('blackjack', () => {
    it(`should return the sum of initial values with the item in sequence in array,
        when the sum pass 21, just return "bust", after that, should just return
        "you are done" to warn the end of the game`, () => {
      const deal = blackjack([
        2,
        6,
        1,
        7,
        11,
        4,
        6,
        3,
        9,
        8,
        9,
        3,
        10,
        4,
        5,
        3,
        7,
        4,
        9,
        6,
        10,
        11,
      ]);
      // /*** PLAYER 1 ***/
      const i_like_to_live_dangerously = deal(4, 5);
      const player1Feedback1 = i_like_to_live_dangerously();
      const player1Feedback2 = i_like_to_live_dangerously();
      const player1Feedback3 = i_like_to_live_dangerously();
      const player1Feedback4 = i_like_to_live_dangerously();
      const player1Feedback5 = i_like_to_live_dangerously();
      const player1Feedback6 = i_like_to_live_dangerously();
      const player1Feedback7 = i_like_to_live_dangerously();

      expect(player1Feedback1).toBe(9);
      expect(player1Feedback2).toBe(11);
      expect(player1Feedback3).toBe(17);
      expect(player1Feedback4).toBe(18);
      expect(player1Feedback5).toBe('bust');
      expect(player1Feedback6).toBe('you are done!');
      expect(player1Feedback7).toBe('you are done!');

      // /*** PLAYER 2 ***/
      const i_TOO_like_to_live_dangerously = deal(2, 2);
      const player2Feedback1 = i_TOO_like_to_live_dangerously();
      const player2Feedback2 = i_TOO_like_to_live_dangerously();
      const player2Feedback3 = i_TOO_like_to_live_dangerously();
      const player2Feedback4 = i_TOO_like_to_live_dangerously();
      const player2Feedback5 = i_TOO_like_to_live_dangerously();
      const player2Feedback6 = i_TOO_like_to_live_dangerously();

      expect(player2Feedback1).toBe(4);
      expect(player2Feedback2).toBe(15);
      expect(player2Feedback3).toBe(19);
      expect(player2Feedback4).toBe('bust');
      expect(player2Feedback5).toBe('you are done!');
      expect(player2Feedback6).toBe('you are done!');

      // /*** PLAYER 3 ***/
      const i_ALSO_like_to_live_dangerously = deal(3, 7);
      const player3Feedback1 = i_ALSO_like_to_live_dangerously();
      const player3Feedback2 = i_ALSO_like_to_live_dangerously();
      const player3Feedback3 = i_ALSO_like_to_live_dangerously();
      const player3Feedback4 = i_ALSO_like_to_live_dangerously();
      const player3Feedback5 = i_ALSO_like_to_live_dangerously();

      expect(player3Feedback1).toBe(10);
      expect(player3Feedback2).toBe(13);
      expect(player3Feedback3).toBe('bust');
      expect(player3Feedback4).toBe('you are done!');
      expect(player3Feedback5).toBe('you are done!');
    });
  });
});
