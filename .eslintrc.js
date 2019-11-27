module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:react/recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": "warn", //warning-уведомления об неиспользуемых переменных
    "react/prop-types": "warn"
  },
};
