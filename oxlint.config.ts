import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    suspicious: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off",
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "react",
    "nextjs",
    "jsx-a11y",
  ],
});
