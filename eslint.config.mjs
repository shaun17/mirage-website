import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const reactRecommended = react.configs.flat.recommended;
const reactJsxRuntime = react.configs.flat["jsx-runtime"];
const hooksRecommended = reactHooks.configs.flat.recommended;
const accessibilityRecommended = jsxA11y.flatConfigs.recommended;

// lint 规则直接对应当前 vinext、TypeScript 与 React 技术栈，不依赖 Next.js 编译器。
export default defineConfig([
  globalIgnores(["dist/**", ".wrangler/**", "videos/**"]),
  js.configs.recommended,
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        fetch: "readonly",
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      ...reactRecommended.plugins,
      ...hooksRecommended.plugins,
      ...accessibilityRecommended.plugins,
    },
    rules: {
      ...reactRecommended.rules,
      ...reactJsxRuntime.rules,
      ...hooksRecommended.rules,
      ...accessibilityRecommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
