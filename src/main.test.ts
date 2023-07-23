import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { main } from "./main.js";

describe("main", () => {
  it("does not throw an error", () => {
    assert.doesNotReject(main());
  });
});
