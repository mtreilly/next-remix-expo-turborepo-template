module.exports = {
  root: true,
  extends: ["../../packages/config/eslint-remix"],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
