// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("../config/jest-rn-native");

module.exports = {
  ...base,
  displayName: "UI Natives Tests",
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
