import { describe, expect, it } from "vitest";
import { ContactSchema } from "./contact.schema";

describe("ContactSchema", () => {
  it("accepts a valid payload", () => {
    const result = ContactSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      phone: "6105551212",
      message: "Hello",
      newsletter: false,
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty message", () => {
    const result = ContactSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      phone: "6105551212",
      message: "",
    });
    expect(result.success).toBe(false);
  });

  it("rejects overlong phone", () => {
    const result = ContactSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      phone: "x".repeat(31),
      message: "Hi",
    });
    expect(result.success).toBe(false);
  });
});
