import { describe, expect, it } from "vitest";
import { buildSitemapXml } from "./sitemap";

describe("buildSitemapXml", () => {
  it("includes public hubs and only the approved listing ids supplied by the server", () => {
    const xml = buildSitemapXml("https://v3rya.example", [42, 84]);
    expect(xml).toContain("https://v3rya.example/guides");
    expect(xml).toContain("https://v3rya.example/listing/42");
    expect(xml).toContain("https://v3rya.example/listing/84");
    expect(xml).not.toContain("/listing/99");
  });
});
