const path = require("path")

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "@typescript-eslint/ban-types": "warn",
    "no-console": ["warn"],
  },
}
