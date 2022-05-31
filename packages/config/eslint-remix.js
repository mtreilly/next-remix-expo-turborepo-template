module.exports = {
  extends: ["./eslint-rn", "@remix-run/eslint-config", "@remix-run/eslint-config/node", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
