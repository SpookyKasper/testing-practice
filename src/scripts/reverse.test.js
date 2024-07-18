import reverse from "./reverse";

test("turns peak into keap", () => {
  expect(reverse("peak")).toBe("kaep");
});

test("turns time into emit", () => {
  expect(reverse("time")).toBe("emit");
});

test("turns logic into cigol", () => {
  expect(reverse("logic")).toBe("cigol");
});
