const { sanitizeStr } = require("./text");

describe("fn: sanitizeStr", () => {
  it("should remove dash character", () => {
    expect(sanitizeStr("Hello - World")).toBe("Hello  World");
  });
});
