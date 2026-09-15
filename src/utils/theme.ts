export type ThemePreference = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "theme";

/**
 * Normalizes whatever is in storage into a preference. Anything unknown
 * (including nothing stored) falls back to following the system.
 */
export function readThemePreference(stored: string | null): ThemePreference {
  return stored === "light" || stored === "dark" ? stored : "system";
}

/** Resolves a preference plus the current system signal into the effective theme. */
export function isDarkTheme(preference: ThemePreference, systemPrefersDark: boolean): boolean {
  return preference === "system" ? systemPrefersDark : preference === "dark";
}
