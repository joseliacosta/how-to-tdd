const fizzbuzz = require("./fizzbuzz");

describe("When run Fizzbuzz", () => {
  it("should return `Fizz` if the number is 3", () => {
    const result = fizzbuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return `Fizz`if the number is 6", () => {
    const result = fizzbuzz(6);
    expect(result).toBe("Fizz");
  });

  it("should return `Buzz` if the number is 5", () => {
    const result = fizzbuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return `FizzBuzz` if the number is 15", () => {
    const result = fizzbuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("should return 8 if the number is 8", () => {
    const result = fizzbuzz(8);
    expect(result).toBe(8);
  });

  it("should return 0 if the number is 0", () => {
    const result = fizzbuzz(0);
    expect(result).toBe(0);
  });
});
