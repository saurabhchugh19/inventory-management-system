module.exports = {
  extends: ["react-app"],
  plugins: ["react-hooks"],
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": [
      "warn",
      { "varsIgnorePattern": "React" }
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies  
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    indent: 2
  }
};