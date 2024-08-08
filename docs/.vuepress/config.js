import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/icecreamk/utils/",
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text: "Array",
        prefix: "/array/",
        link: "/array/",
        children: [
          {
            text: "sum",
            link: "sum.md",
          },
          {
            text: "convertListToTree",
            link: "convertListToTree.md",
          },
        ],
      },
    ],
  }),
  lang: "zh-CN",
  title: "fun-utils",
  description: "first vuepress",
});
