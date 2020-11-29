const { createUser } = require(".");

describe("fn: createUser", () => {
  it("should return an object with user name sanitized", () => {
    expect(createUser("John - Doe")).toEqual({
      name: "John  Doe",
    });
  });
});
