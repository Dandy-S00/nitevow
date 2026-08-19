import { describe, expect, it } from "vitest";

describe("public brand configuration", () => {
  it("exposes the requested v3rya application title", () => {
    expect(process.env.VITE_APP_TITLE).toBe("v3rya");
  });
});
