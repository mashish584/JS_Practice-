import { total } from "./App";

jest.mock("./Add", () => ({
  add: () => 1118
}));

// Integration Testing
test("[TEST] total()", () => {
  const value = total(25, 1093);
  expect(value).toBe("$1118");
});
