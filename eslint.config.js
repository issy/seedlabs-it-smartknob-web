import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: ['dist', 'eslint.config.js']
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs["recommended-latest"],
);

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   parser: "@typescript-eslint/parser",
//   plugins: ["react-refresh"]
// };
