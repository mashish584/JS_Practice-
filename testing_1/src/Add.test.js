import { add } from "./Add";

// Unit Testing
test("[TEST] add()", () => {
  const value = add(2, 5);
  expect(value).toBe(7);
});
