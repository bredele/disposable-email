import { test } from "node:test";
import assert from "node:assert";
import isDisposableEmail, { domains } from ".";

test("should return true for known disposable email domains", () => {
  const disposableEmails = [
    "test@10minutemail.com",
    "user@0-mail.com",
    "example@guerrillamail.com",
  ];

  for (const email of disposableEmails) {
    assert.strictEqual(
      isDisposableEmail(email),
      true,
      `${email} should be identified as disposable`
    );
  }
});

test("should return false for legitimate email domains", () => {
  const legitimateEmails = [
    "user@gmail.com",
    "test@yahoo.com",
    "example@outlook.com",
    "contact@company.com",
  ];

  legitimateEmails.forEach((email) => {
    assert.strictEqual(
      isDisposableEmail(email),
      false,
      `${email} should not be identified as disposable`
    );
  });
});

test("should handle email addresses with different cases", () => {
  if (domains.includes("10minutemail.com")) {
    assert.strictEqual(isDisposableEmail("TEST@10MINUTEMAIL.COM"), false);
    assert.strictEqual(isDisposableEmail("test@10minutemail.com"), true);
  }
});

test("should handle email addresses with subdomains", () => {
  assert.strictEqual(isDisposableEmail("user@mail.10minutemail.com"), false);
});

test("should export domains array", () => {
  assert.ok(Array.isArray(domains), "domains should be an array");
  assert.ok(domains.length > 0, "domains array should not be empty");
  assert.ok(
    domains.every((domain) => typeof domain === "string"),
    "all domains should be strings"
  );
});

test("should handle malformed email addresses gracefully", () => {
  assert.strictEqual(isDisposableEmail("notanemail"), false);
  assert.strictEqual(isDisposableEmail("@nodomain.com"), false);
  assert.strictEqual(isDisposableEmail("user@"), false);
});

test("should return false for empty string", () => {
  assert.strictEqual(isDisposableEmail(""), false);
});
