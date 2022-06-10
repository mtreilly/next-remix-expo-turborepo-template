module.exports = {
  ...require("./jest-common"),
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  collectCoverageFrom: ["**/src/**/*.{js,ts,jsx,tsx}"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
};
