import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "rollup.config.js",
      "lib/*",
      "coverage/*",
      ".prettierrc.js",
      "commitlint.config.js",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-const-assign": 2,
    },
  },
];
