import { describe, expect, it } from "vitest";
import { isDarkTheme, readThemePreference } from "@/utils/theme";

describe("readThemePreference", () => {
  it("defaults to system when nothing is stored", () => {
    expect(readThemePreference(null)).toBe("system");
  });

  it("defaults to system when the stored value is not a known preference", () => {
    expect(readThemePreference("purple")).toBe("system");
  });

  it("keeps an explicitly stored preference", () => {
    expect(readThemePreference("light")).toBe("light");
    expect(readThemePreference("dark")).toBe("dark");
    expect(readThemePreference("system")).toBe("system");
  });
});

describe("isDarkTheme", () => {
  it("follows the system signal when the preference is system", () => {
    expect(isDarkTheme("system", true)).toBe(true);
    expect(isDarkTheme("system", false)).toBe(false);
  });

  it("ignores the system signal when the preference is explicit", () => {
    expect(isDarkTheme("dark", false)).toBe(true);
    expect(isDarkTheme("light", true)).toBe(false);
  });
});
