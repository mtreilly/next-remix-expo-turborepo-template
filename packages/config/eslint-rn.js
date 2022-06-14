module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "prettier"],
  globals: {},
  settings: {},
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react", "simple-import-sort"],
  ignorePatterns: ["**/*.json", "node_modules", "public", "styles", "coverage", "dist", ".turbo", "metro.config.js"],
  rules: {
    // react
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "no-console": 1,
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": ["off", { devDependencies: ["**/?(*.)+(spec|test).[jt]s?(x)"] }],
      },
    },
  ],
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
};
