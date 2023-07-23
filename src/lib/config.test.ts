import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import { ensureEnv } from "./config.js";

describe("config.ensureEnv", () => {
  before(() => {
    process.env["TEST_DOES_EXIST"] = "bar";
  });

  after(() => {
    delete process.env["TEST_DOES_EXIST"];
  });

  it("returns value if an env is set", () => {
    assert.equal(ensureEnv("TEST_DOES_EXIST"), "bar");
  });

  it("throws an error if an env is not set", () => {
    assert.throws(() => {
      ensureEnv("TEST_DOES_NOT_EXIST");
    }, TypeError);
  });
});
