module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // "@typescript-eslint/no-unnecessary-condition": "error",
    // removes unnecessary conditional checks and optional chaining. Prevent against empty objects and arrays evaluate to true. Handles pending promises.
    // ---
    // "no-shadow": "off",
    // "@typescript-eslint/no-shadow": "error"
    // Note: you must disable the base rule as it can report incorrect errors. Prevents to share variables names across different scopes.
    // ---
    //"@typescript-eslint/naming-convention": "error"
    // Defines naming convention rules inside the project. https://typescript-eslint.io/rules/naming-convention/
    // ---
    // "require-await": "off",
    // "@typescript-eslint/require-await": "error"
    // Note: you must disable the base rule as it can report incorrect errors. Disallow async functions which have no await expression
    // ---
    // Folders and files naming: https://github.com/christopherbradleybanks/eslint-plugin-folders https://github.com/dolsem/eslint-plugin-filename-rules
  },
  ignorePatterns: [
    "webpack/**",
    ".eslintrc.js",
    "config/jest/transformers/**",
    "jest.config.js",
  ],
};
