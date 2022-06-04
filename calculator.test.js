const { test } = require("picomatch");
const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two small negative numbers', () => {
    expected = -8;
    actual = sum(-5,-3);
    expect(actual).toBe(expected);
  })

  test.skip('can add two large positive numbers', () => { 
    
  });

  test.skip('can add two negative numbers', () => {
    
  });

  test.skip('can add zero', () => {
    
  });

});

describe('subtract', () => {
  
  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(5, 3);
    expect(actual).toBe(expected);
  })

  test('can subtract two negtive numbers', () => {
    exected = -2;
    actual = subtract(-5, -3);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 15;
    actual = multiply(5, 3);
    expect(actual).toBe(expected);
  })

  test('can multiply two small negative numbers', () => {
    expected = 6;
    actual = multiply(-3, -2);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = multiply(6, 2);
    expect(actual).toBe(expected);
  })

  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = multiply(6, 2);
    expect(actual).toBe(expected);
  })

  test('can divide two small negative numbers', () => {
    expected = 3;
    actual = multiply(-6, -2);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {

  test('can get the remainder from one small number divided by another', () => {
    expected = 0;
    actual = modulus(6, 2);
    expect(actual).toBe(expected);
  })

  test('can get the remainder from one large odd number divided by another small even number', () => {
    expected = 1;
    actual = modulus(15, 2);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {

  test('will return true with even number', () => {
    actual = even(10);
    expect(actual).toBeTruthy();
  })

  test('will return false with odd number', () => {
    actual = even(7);
    expect(actual).toBeFalsy();
  })

});

describe('eveoddn', () => {

  test('will return true with odd number', () => {
    actual = even(11);
    expect(actual).toBeTruthy();
  })

  test('will return false with even number', () => {
    actual = even(8);
    expect(actual).toBeFalsy();
  })

});
