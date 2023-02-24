/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:vitest-globals/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: { "vitest-globals/env": true },
};
