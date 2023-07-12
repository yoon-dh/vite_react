module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "jsx-a11y", "react-hooks", "react-refresh", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "import/recommended",
  ],
  rules: {},
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
