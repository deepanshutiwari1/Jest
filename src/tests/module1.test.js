const module1 = require("../module1");

describe("Test using spy on a function", () => {
  test("Check if greet function is called?", () => {
    const greetSpy = jest.spyOn(module1, "greet");

    module1.greet("Wassup?");

    expect(greetSpy).toHaveBeenCalledWith("Wassup?");

    greetSpy.mockRestore();
  });

  test("Spy- Partial Mocking", () => {
    const spyGreet = jest
      .spyOn(module1, "greet")
      .mockImplementation((message) => {
        console.log(`You are greeted with message: ${message}`);
        return false;
      });

    const result = module1.greet("Hola Amigo.");

    expect(spyGreet).toHaveBeenCalledWith("Hola Amigo.");

    expect(result).toBe(false);

    module1.greet("Namaste");

    expect(spyGreet).toHaveBeenCalledTimes(2);
  });
});

/*
Spies and mock
Key Differences Between Spies and Mocks:

Replacement vs. Observation

Mock: Completely replaces the original method
Spy: Observes the original method while allowing optional modification


Implementation Preservation

Mock: Loses original implementation entirely
Spy: Keeps original implementation by default, can selectively modify


Tracking Capabilities

Spy provides more detailed tracking:

Counts exact number of calls
Tracks arguments precisely
Can observe without changing behavior


Flexibility

Spy allows:

Partial method replacement
Keeping some original logic
More granular control



Practical Use Cases for Spies:

Logging and monitoring
Partial method overriding
Keeping original method behavior while testing
More detailed call tracking

When to Use:

Use Mock when you want complete method replacement
Use Spy when you want to observe or slightly modify existing methods

The example demonstrates how a spy can:

Track method calls
Preserve original implementation
Optionally modify behavior
Provide detailed call information

*/
