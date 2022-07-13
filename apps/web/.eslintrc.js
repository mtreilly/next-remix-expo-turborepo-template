module.exports = {
  root: true,
  extends: ["../../packages/config/eslint-next"],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
