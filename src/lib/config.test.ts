import { ensureEnv } from "./config.js";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("ensureEnv()", () => {
  beforeEach(() => {
    process.env["TEST_DOES_EXIST"] = "bar";
  });

  afterEach(() => {
    delete process.env["TEST_DOES_EXIST"];
  });

  it("returns value if an env is set", () => {
    expect(ensureEnv("TEST_DOES_EXIST")).toEqual("bar");
  });

  it("throws an error if an env is not set", () => {
    expect(() => {
      ensureEnv("TEST_DOES_NOT_EXIST");
    }).toThrow(TypeError);
  });
});
