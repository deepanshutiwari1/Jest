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
