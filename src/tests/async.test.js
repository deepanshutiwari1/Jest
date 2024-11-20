const { fetchData } = require("../index");

describe("Async unit tests!", () => {
  test("Fetch should return intented data.", async () => {
    const jsonResult = await fetchData(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await jsonResult.json();

    expect(result).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  });

  test("On wrong url Fetch should fail with an error", async () => {
    try {
      await fetchData("https://jsonplaceholder.typicode.com/todos/34343");
    } catch (err) {
      expect(err).toBe("Not Found");
    }
  });

  test("Fetch resolves.", async () => {
    await expect(
      fetchData("https://jsonplaceholder.typicode.com/todos/3").then((data) =>
        data.json()
      )
    ).resolves.toEqual({
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    });
  });

  test("Fetch rejects.", async () => {
    await expect(
      fetchData("https://jsonpaceholder.typicode.com/todos/3").then((d) =>
        d.json()
      )
    ).rejects.toThrow();
  });
});
