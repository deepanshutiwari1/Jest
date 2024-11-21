const {
  addToArray,
  removeFromArray,
  arrayContains,
} = require("../utils/array");

let testArray;

beforeAll(() => {
  console.log("Initialize an array");
  testArray = [];
});

afterAll(() => {
  console.log("Clears an array!");

  testArray = null;
});

beforeEach(() => {
  console.log("Initialize with an elements");
  testArray = ["one", "two"];
});

afterEach(() => {
  // testArray = [];
  console.log("Print an array! ", testArray);
});

describe("Test an array!", () => {
  test("Add an item", () => {
    addToArray(testArray, "Jupitor!");
    expect(testArray).toContain("Jupitor!");
  });

  test("Remove an item", () => {
    addToArray(testArray, "Jupitor!");
    addToArray(testArray, "Moon!");

    testArray = removeFromArray(testArray, "Jupitor!");

    expect(testArray).not.toContain("Jupitor!");
  });

  test("Does array contain an item", () => {
    addToArray(testArray, "Sunday");
    addToArray(testArray, "Tuesday");

    const result = arrayContains(testArray, "Tuesday");

    expect(result).toBe(true);
  });
});

/* 
Setup and Teardown in Testing Explained:

Setup (beforeEach, beforeAll)

Prepares the test environment before running tests
Creates fresh instances
Sets up initial test conditions
Runs before each test or once before all tests


Teardown (afterEach, afterAll)

Cleans up resources after tests
Resets state
Removes temporary files or connections
Runs after each test or once after all tests



Jest Provides Four Main Methods:

beforeEach(): Runs before each individual test
afterEach(): Runs after each individual test
beforeAll(): Runs once before all tests in a describe block
afterAll(): Runs once after all tests in a describe block

Common Use Cases:

Database connection/disconnection
Creating test instances
Resetting global states
Mocking external services
Cleaning up temporary resources
Preparing test data

Key Benefits:

Ensures each test starts with a clean, predictable state
Prevents test interdependence
Manages complex setup and teardown logic
Improves test isolation

Best Practices:

Keep setup and teardown methods simple
Reset all mutable state
Close connections
Remove temporary resources
Avoid complex logic in these methods
*/
