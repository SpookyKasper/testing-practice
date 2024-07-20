import analyzeArray from "./analyzeArray";

test("it throws an error on an empty array", () => {
  expect(() => analyzeArray([])).toThrow;
});

test("it throws an error if no argument is passed", () => {
  expect(() => analyzeArray()).toThrow;
});

test("analyzeArray returns an object", () => {
  expect(typeof analyzeArray([1, 1])).toBe("object");
});

test("when passed [2, 4] it returns an object with an average property with a value of 3", () => {
  expect(analyzeArray([2, 4]).average).toBe(3);
});

test("when passed [4, 6] it returns an object with an average property with a value of 5", () => {
  expect(analyzeArray([4, 6]).average).toBe(5);
});

test("when passed [4, 6] it returns an object with an average property with a value of 5", () => {
  expect(analyzeArray([4, 6]).average).toBe(5);
});

test("when passed more numbers is returns the right average, like [1, 2, 3, 4, 5, 6, 7] returns 4", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).average).toBe(4);
});

test("when passed only one number it returns that number as the average, like [3] returns 3", () => {
  expect(analyzeArray([3]).average).toBe(3);
});

test("when passed [2, 4] it returns an object with an min property with a value of 2", () => {
  expect(analyzeArray([2, 4]).min).toBe(2);
});

test("when passed [7, 0, 6] it returns an object with an min property with a value of 0", () => {
  expect(analyzeArray([7, 0, 6]).min).toBe(0);
});

test("when passed [-3, 1, 4, 6, -8] it returns an object with an min property with a value of -8", () => {
  expect(analyzeArray([-3, 1, 4, 6, -8]).min).toBe(-8);
});

test("[3] returns { average: 3, min: 3, max: 3, length: 1 }", () => {
  expect(analyzeArray([3])).toEqual({ average: 3, min: 3, max: 3, length: 1 });
});

test("[2, 4] returns { average: 3, min: 2, max: 4, length 2 }", () => {
  expect(analyzeArray([2, 4])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});

test("[8, 0, 6] returns { average: 7, min: 0, max: 8, length: 3 }", () => {
  expect(analyzeArray([18, 0, 3])).toEqual({
    average: 7,
    min: 0,
    max: 18,
    length: 3,
  });
});

test("[-3, 1, 4, 6, -8] returns { average: 0, min: -8, max: 6, length: 5}", () => {
  expect(analyzeArray([-3, 1, 4, 6, -8])).toEqual({
    average: 0,
    min: -8,
    max: 6,
    length: 5,
  });
});
