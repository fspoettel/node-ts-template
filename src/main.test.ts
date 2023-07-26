import { main } from "./main.js";
import { describe, expect, it } from "vitest";

describe("main", () => {
  it("does not throw an error", () => {
    expect(main()).resolves.toBeTruthy();
  });
});
