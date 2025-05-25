import { add, divide } from "./mathUtils";

describe("mathUtils", () => {
  test("add should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("divide should return the division of two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide should throw error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
