import { describe, expect, it } from "vitest";
import {
  gmailScope,
  googleConnectionsUrl,
  privacyPolicy,
  privacyPolicyUpdated,
} from "@/i18n/privacyPolicy";

describe("Hermes privacy policy", () => {
  it("uses the exact read-only scope and Google revocation URL", () => {
    expect(gmailScope).toBe("https://www.googleapis.com/auth/gmail.readonly");
    expect(googleConnectionsUrl).toBe("https://myaccount.google.com/connections");
    expect(privacyPolicyUpdated).toBe("2026-10-17");
  });

  it("keeps both languages aligned with unique anchor targets", () => {
    const ids = privacyPolicy.en.sections.map((section) => section.id);
    expect(privacyPolicy.es.sections.map((section) => section.id)).toEqual(ids);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual([
      "hermes",
      "gmail-access",
      "planned-email-service",
      "processing",
      "storage",
      "revoke-access",
      "remove-local-data",
      "policy-contact",
    ]);
  });

  for (const [lang, policy] of Object.entries(privacyPolicy)) {
    it(`identifies the app and processing providers in ${lang}`, () => {
      const text = policy.sections.flatMap((section) => section.paragraphs).join(" ");
      for (const name of [
        "Hermes Personal Assistant",
        "Ubuntu",
        "Windows",
        "Google OAuth",
        "OpenAI",
        "ChatGPT/Codex",
        "Telegram",
      ]) {
        expect(text).toContain(name);
      }
      expect(policy.description.length).toBeGreaterThan(0);
      expect(policy.sections.every((section) => section.paragraphs.length > 0)).toBe(true);
    });
  }

  it("preserves important capability, retention, and deletion qualifications", () => {
    const paragraphs = (id: string) =>
      privacyPolicy.en.sections.find((section) => section.id === id)?.paragraphs.join(" ");
    expect(paragraphs("gmail-access")).toContain(
      "current read-only connection cannot send or schedule email, create Gmail drafts, modify messages, or delete messages",
    );
    expect(paragraphs("processing")).toContain("not limited to the local virtual machine");
    expect(paragraphs("storage")).toContain("no fixed retention period");
    expect(paragraphs("revoke-access")).toContain("does not automatically delete");
    expect(paragraphs("remove-local-data")).toContain("backups");
  });

  it("distinguishes the proposed sending workflow from implemented capabilities", () => {
    const text = privacyPolicy.en.sections
      .find((section) => section.id === "planned-email-service")
      ?.paragraphs.join(" ");
    for (const qualification of [
      "has not been implemented or verified",
      "exact permissions will be documented when implemented",
      "To, CC, BCC, subject, body, and attachments",
      "approval of that exact version",
      "changes would invalidate approval",
      "rejected or expired requests would not be sent",
      "Google permissions would permit sending",
      "enforced by the service, not by a draft-only Google permission",
      "neither approval enforcement nor credential isolation has been implemented or verified",
      "Prevention of unauthorized sending is not guaranteed",
      "approval records",
    ]) {
      expect(text).toContain(qualification);
    }
  });

  it("covers separate authorization, retention, and removal without activating the service", () => {
    const text = privacyPolicy.en.sections.flatMap((section) => section.paragraphs).join(" ");
    expect(text).toContain("does not grant Google permissions or activate the planned service");
    expect(text).toContain("would not necessarily revoke the service’s access");
    expect(text).toContain("service records, logs, or backups");
    expect(text).toContain("no deletion commands are specified for the unbuilt service");
    for (const policy of Object.values(privacyPolicy)) {
      const scopes = [
        ...JSON.stringify(policy).matchAll(/https:\/\/www\.googleapis\.com\/auth\/[^\s"\\]+/g),
      ];
      expect(scopes).toHaveLength(0);
    }
  });
});
