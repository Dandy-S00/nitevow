import { describe, expect, it } from "vitest";
import { getProfileMediaKind, MAX_PROFILE_MEDIA_BYTES } from "./mediaRules";

describe("profile media upload rules", () => {
  it("accepts supported photos and videos while rejecting unsupported file types", () => {
    expect(getProfileMediaKind("image/webp")).toEqual({ extension: "webp", mediaType: "image" });
    expect(getProfileMediaKind("video/mp4")).toEqual({ extension: "mp4", mediaType: "video" });
    expect(getProfileMediaKind("application/pdf")).toBeNull();
  });
  it("keeps the profile media size limit at 25 MB", () => expect(MAX_PROFILE_MEDIA_BYTES).toBe(25 * 1024 * 1024));
});
