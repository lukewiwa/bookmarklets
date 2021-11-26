module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {},
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
