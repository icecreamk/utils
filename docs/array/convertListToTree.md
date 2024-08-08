```ts title=".vuepress/sum.js"
import { convertListToTree } from "@asfor-fun/utils";

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

// [
//   {
//     id: "1",
//     pid: "0",
//     children: [
//       {
//         id: "1-1",
//         pid: "1",
//       },
//     ],
//   },
// ];
```
