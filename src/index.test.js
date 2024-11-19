const multiply = require("./index");

// Test Suite // As many tests files as many Suits

describe("Multiply test", () => {
  it("2 and 4 multiply to 8", () => {
    expect(multiply(2, 4)).toBe(8); // exact equality
  });

  it("3 and 5 multiply not to 14", () => {
    // toBe is Exact equality like ===
    expect(multiply(3, 5)).not.toBe(14);
  });
});

describe("Objects", () => {
  it("Object euqlity", () => {
    const person = { name: "Mohan Kumar" };
    person["age"] = 23;

    // toEqual is deep equality
    expect(person).toEqual({ name: "Mohan Kumar", age: 23 });
  });
});

describe("Null and undefined Values", () => {
  it("value is null!", () => {
    const value = null;
    expect(value).toBeNull();
  });

  it("value is not null", () => {
    const value = 90;
    expect(value).not.toBeNull();
  });

  it("value is defined", () => {
    let value = 3;

    expect(value).toBeDefined();
  });

  it("value is not defined", () => {
    let value;

    expect(value).not.toBeDefined();
  });

  it("value is un defined", () => {
    let value;

    expect(value).toBeUndefined();
  });

  it("value is truthy", () => {
    let value = "3";
    expect(value).toBeTruthy();
  });

  it("value is falsy", () => {
    let value = undefined;
    expect(value).toBeFalsy();
  });
});

describe("Number Comparison", () => {
  test("number should be 6", () => {
    const number = 6;
    expect(number).toBe(6);
  });

  test("number should be equal to  7", () => {
    const number = 7;
    expect(number).toBe(7);
  });

  test("number should be > 3", () => {
    const number = 5;
    expect(number).toBeGreaterThan(3);
  });

  test("number should be >= to 6", () => {
    const number = 7;
    expect(number).toBeGreaterThanOrEqual(6);
  });

  test("number should be < 6", () => {
    const number = 5;
    expect(number).toBeLessThan(6);
  });

  test("number should be <= 45", () => {
    const number = 41;
    expect(number).toBeLessThanOrEqual(45);
  });
});
