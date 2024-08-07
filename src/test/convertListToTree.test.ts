import { convertListToTree } from "../index";

describe("sum", () => {
  it("should work", () => {
    const list = [
      {
        id: "1",
        pid: "0",
      },
      {
        id: "1-1",
        pid: "1",
      },
    ];
    const tree = convertListToTree(list);
    expect(tree[0]["children"][0]["id"]).toEqual("1-1");
  });
});
