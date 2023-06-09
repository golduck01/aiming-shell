module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    "class-methods-use-this": "off",
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};
