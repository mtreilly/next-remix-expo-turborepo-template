module.exports = {
  root: true,
  extends: ["config/eslint-remix"],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
