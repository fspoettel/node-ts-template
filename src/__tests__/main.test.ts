import { main } from "@/main.js";

describe("main", () => {
  it("does not throw an error", () => {
    expect(main()).resolves.toBeTruthy();
  });
});
