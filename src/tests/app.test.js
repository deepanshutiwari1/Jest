jest.mock("../utils/math");

const { calculate } = require("../app");
const { add } = require("../utils/math");

describe("calculate", () => {
  test("calls add function", () => {
    calculate(1, 3, "add");
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith(1, 3);
  });
});
