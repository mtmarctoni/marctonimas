import { describe, expect, it } from "vitest";
import { hermes } from "@/i18n/hermes";

describe("Hermes application homepage", () => {
  const paragraphs = (id: string) =>
    hermes.en.sections.find((section) => section.id === id)?.paragraphs.join(" ");

  it("keeps the enduring purpose separate from current capabilities", () => {
    expect(hermes.en.introduction).toContain("Google services I explicitly connect");
    expect(hermes.en.introduction).not.toContain("Gmail");
    expect(paragraphs("capabilities")).toContain("only to my own Gmail account");
    expect(paragraphs("capabilities")).toContain("copy suggested reply text into Gmail");
    expect(paragraphs("access")).toContain("read-only (gmail.readonly)");
    expect(paragraphs("access")).toContain(
      "cannot create Gmail drafts, send or schedule emails, modify messages, or delete messages",
    );
  });

  it("qualifies future access and revocation", () => {
    expect(paragraphs("access")).toContain("none are currently enabled");
    expect(paragraphs("access")).toContain("requires the appropriate Google authorization");
    expect(paragraphs("access")).toContain("current authorization does not cover future services");
    expect(paragraphs("access")).toContain("will require updated disclosures");
    expect(paragraphs("access")).toContain("does not automatically delete");
    expect(paragraphs("privacy")).toContain("service that is not currently enabled");
  });

  it("discloses processing, retention, and personal-only availability", () => {
    const privacy = paragraphs("privacy");
    for (const detail of [
      "OpenAI",
      "Telegram",
      "not exclusively local",
      "separately from this public website",
      "local conversation history, logs, or backups",
      "not the backend",
    ]) {
      expect(privacy).toContain(detail);
    }
    expect(paragraphs("contact")).toContain("not available to visitors");
    expect(paragraphs("contact")).toContain("no public registration");
  });

  it("keeps translations aligned and copy compact", () => {
    const ids = hermes.en.sections.map((section) => section.id);
    expect(hermes.es.sections.map((section) => section.id)).toEqual(ids);
    expect(new Set(ids).size).toBe(ids.length);
    for (const content of Object.values(hermes)) {
      const text = [
        content.introduction,
        content.context,
        ...content.sections.flatMap((section) => [section.title, ...section.paragraphs]),
      ].join(" ");
      expect(text.split(/\s+/).length).toBeLessThan(650);
      expect(content.description.length).toBeGreaterThan(0);
      expect(content.context).toContain("Ubuntu");
      expect(content.context).toContain("Telegram");
    }
  });
});
