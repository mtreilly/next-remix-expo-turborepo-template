module.exports = {
  extends: ["./eslint-rn", "universe/native", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
