import { describe, expect, it } from "vitest";
import { isExactMediaOrder } from "./db";

describe("profile media ordering validation", () => {
  it("accepts exactly one complete ordering of the owner’s media", () => {
    expect(isExactMediaOrder([2, 5, 9], [9, 2, 5])).toBe(true);
  });
  it("rejects an incomplete, duplicate, or foreign media ordering", () => {
    expect(isExactMediaOrder([2, 5, 9], [9, 2])).toBe(false);
    expect(isExactMediaOrder([2, 5, 9], [9, 2, 2])).toBe(false);
    expect(isExactMediaOrder([2, 5, 9], [9, 2, 12])).toBe(false);
  });
});
