const multiply = require("./index");

// Test Suite
test("2 and 4 multiply to 8", () => {
  expect(multiply(2, 4)).toBe(8); // exact equality
});
