// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("../../packages/config/jest-rn");

module.exports = {
  ...base,
  displayName: "Native Tests",
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
