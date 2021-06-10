import {
  bufferToString,
  stringToBuffer,
} from "../script/001.bufferAndString.js";

let buf = Buffer.from("test", "utf-8");
let utf8 = "utf-8";
let testStr = "str";
describe("test 001.bufferAndString.js", () => {
  it("bufferToString", () => {
    expect(bufferToString(buf, utf8)).toBe("test");
  });
  it("StringToBuffer", () => {
    expect(stringToBuffer(testStr, utf8)).toBe(buf);
  });
});
