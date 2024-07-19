import caesarCipher from "./caesarCipher";

test("when passed abc and 3 return def", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("when passed def and 3 return ghi", () => {
  expect(caesarCipher("def", 3)).toBe("ghi");
});

test("check when 0 us passed so that def and 0 return def", () => {
  expect(caesarCipher("def", 0)).toBe("def");
});

test("check for negative numbers so that def and -3 return abc", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("alphabet wraps so that xyz and 3 becomes abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("alphabet wraps so that zab and 3 becomes cde", () => {
  expect(caesarCipher("zab", 3)).toBe("cde");
});

test("case preservation so that aBc and 3 becomes dEf", () => {
  expect(caesarCipher("aBc", 3)).toBe("dEf");
});

test("case preservation when wrapped so that xYz and 3 becomes aBc", () => {
  expect(caesarCipher("xYz", 3)).toBe("aBc");
});

test("case preservation when wrapped backwards so that aBC and -3 becomes xYZ", () => {
  expect(caesarCipher("aBC", -3)).toBe("xYZ");
});

test("punctuation stays the same so that 'hello! World' and 1 becomes 'iemmo! Xlsme'", () => {
  expect(caesarCipher("hello! World", 1)).toBe("ifmmp! Xpsme");
});

test("only punctiation strings stay the same so that '../ *' becomes '../ *", () => {
  expect(caesarCipher("../ *", 10)).toBe("../ *");
});
