import capitalize from "./capitalize";

test("transforms peak into Peak", () => {
  expect(capitalize("peak")).toBe("Peak");
});

test("transforms time into Time", () => {
  expect(capitalize("time")).toBe("Time");
});

test("transforms elsker into Elsker", () => {
  expect(capitalize("elsker")).toBe("Elsker");
});
