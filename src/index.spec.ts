import tinymark from "./";

describe("format", () => {
  it("returns existing string if no formatter characters found", () => {
    expect(tinymark("Hello world!")).toBe("Hello world!");
  });

  it("adds b tags around text that was surrounded with *", () => {
    expect(tinymark("Hello *bold* world!")).toBe("Hello <b>bold</b> world!");
  });

  it("ignores * without a match", () => {
    expect(tinymark("Hello *bold* * world!")).toBe(
      "Hello <b>bold</b> * world!"
    );
  });

  it("adds b tags around all text that was surrounded with *", () => {
    expect(tinymark("Hello *bold* *bold* world!")).toBe(
      "Hello <b>bold</b> <b>bold</b> world!"
    );
  });

  it("adds i tags around text that was surrounded with _", () => {
    expect(tinymark("Hello _italic_ world!")).toBe(
      "Hello <em>italic</em> world!"
    );
  });

  it("adds i tags around all text that was surrounded with _", () => {
    expect(tinymark("Hello _italic_ _italic_ world!")).toBe(
      "Hello <em>italic</em> <em>italic</em> world!"
    );
  });

  it("ignores _ without a match", () => {
    expect(tinymark("Hello _italic_ _ world!")).toBe(
      "Hello <em>italic</em> _ world!"
    );
  });

  it("does not interlace tags", () => {
    expect(tinymark("Hello *int_er*laced_ world!")).toBe(
      "Hello <b>int<em>er</em></b><em>laced</em> world!"
    );
  });

  it("does not interlace tags (multiple instances)", () => {
    expect(tinymark("Hello *int_er*laced_ *int_er*laced_ world!")).toBe(
      "Hello <b>int<em>er</em></b><em>laced</em> <b>int<em>er</em></b><em>laced</em> world!"
    );
  });

  it("does not deinterlace tags if it's already deinterlaced", () => {
    expect(tinymark("Hello *deint_er_*_laced_ world!")).toBe(
      "Hello <b>deint<em>er</em></b><em>laced</em> world!"
    );
  });

  it("new lines converted into breaks", () => {
    expect(tinymark("Hello \n world!")).toBe("Hello <br /> world!");
  });

  it("multiple new lines converted into breaks", () => {
    expect(tinymark("Hello \n\n world!")).toBe("Hello <br /><br /> world!");
  });

  it("new lines with bold and italic", () => {
    expect(tinymark("*_Hello_ \n world!*")).toBe(
      "<b><em>Hello</em> <br /> world!</b>"
    );
  });
});
