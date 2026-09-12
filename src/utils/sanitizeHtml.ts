import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(value: string): string {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: ["h1", "p", "span", "a"],
    ALLOWED_ATTR: ["class", "href"],
  });
}
