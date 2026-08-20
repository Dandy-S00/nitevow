export const PROFILE_MEDIA_EXTENSIONS: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif", "video/mp4": "mp4", "video/webm": "webm" };
export const MAX_PROFILE_MEDIA_BYTES = 25 * 1024 * 1024;
export function getProfileMediaKind(mimeType: string) { const extension = PROFILE_MEDIA_EXTENSIONS[mimeType]; return extension ? { extension, mediaType: mimeType.startsWith("image/") ? "image" as const : "video" as const } : null; }
