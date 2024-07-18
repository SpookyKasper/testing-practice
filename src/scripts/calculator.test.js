import calculator from "./calculator";

test("calculator includes sum function", () => {
  expect(typeof calculator.sum).toBe("function");
});

test("calculator includes subtract function", () => {
  expect(typeof calculator.subtract).toBe("function");
});

test("calculator includes multiply function", () => {
  expect(typeof calculator.multiply).toBe("function");
});

test("calculator includes divide function", () => {
  expect(typeof calculator.divide).toBe("function");
});

test("sum function in calculator when passed 2 and 2 returns 4", () => {
  expect(calculator.sum(2, 2)).toEqual(4);
});

test("sum function in calculator when passed 0 and 5 returns 5", () => {
  expect(calculator.sum(0, 5)).toEqual(5);
});

test("sum function in calculator when passed -3 and -2 returns -5", () => {
  expect(calculator.sum(-3, -2)).toEqual(-5);
});

test("subtract function in calculator when passed -3 and -2 returns -1", () => {
  expect(calculator.subtract(-3, -2)).toEqual(-1);
});

test("subtract function in calculator when passed 10 and 5 returns 5", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

test("multiply function in calculator when passed 10 and 5 returns 50", () => {
  expect(calculator.multiply(10, 5)).toEqual(50);
});

test("multiply function in calculator when passed -2 and 5 returns -10", () => {
  expect(calculator.multiply(-2, 5)).toEqual(-10);
});

test("divide function in calculator when passed 30 and 5 returns 6", () => {
  expect(calculator.divide(30, 5)).toEqual(6);
});

test("divide function in calculator when passed 10 and -5 returns -2", () => {
  expect(calculator.divide(10, -5)).toEqual(-2);
});
