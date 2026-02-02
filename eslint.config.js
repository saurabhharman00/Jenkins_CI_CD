const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.node,
        ...globals.mocha,   // Add Mocha test globals (describe, it, etc.)
      },
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "next|res" }],
      "no-console": "off",
      "semi": ["error", "always"]
    },
  }
];
