module.exports = {
  root: true,
  extends: ["../../packages/config/eslint-rn-native"],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
