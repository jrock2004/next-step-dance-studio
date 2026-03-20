import { describe, expect, it } from "vitest";
import {
  RegistrationApiSchema,
  buildRegistrationFormSchema,
} from "./registration.schema";

const apiPayload = {
  firstName: "A",
  lastName: "B",
  age: 8,
  birthday: "2016-01-02",
  parentOrGuardian: "C",
  homeAddress: "1 Main",
  homeCity: "Birdsboro",
  homeState: "PA",
  homeZip: "19508",
  homePhone: "6105822111",
  email: "a@b.co",
  classes: "Tap",
  parentOrGuardianSignature: "C",
  signatureDate: "2026-03-01",
};

describe("RegistrationApiSchema", () => {
  it("accepts a valid API body", () => {
    expect(RegistrationApiSchema.safeParse(apiPayload).success).toBe(true);
  });

  it("rejects bad zip", () => {
    expect(
      RegistrationApiSchema.safeParse({ ...apiPayload, homeZip: "bad" }).success,
    ).toBe(false);
  });
});

describe("buildRegistrationFormSchema", () => {
  it("includes dynamic class ids", () => {
    const schema = buildRegistrationFormSchema(["tap", "ballet"]);
    const ok = schema.safeParse({
      ...apiPayload,
      acceptTerms: true,
      tap: true,
      ballet: false,
      birthday: new Date("2016-01-02"),
      signatureDate: new Date("2026-03-01"),
    });
    expect(ok.success).toBe(true);
  });

  it("requires acceptTerms to be true", () => {
    const schema = buildRegistrationFormSchema(["tap"]);
    const bad = schema.safeParse({
      ...apiPayload,
      acceptTerms: false,
      tap: true,
      birthday: new Date("2016-01-02"),
      signatureDate: new Date("2026-03-01"),
    });
    expect(bad.success).toBe(false);
  });
});
