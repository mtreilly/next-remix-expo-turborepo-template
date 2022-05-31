import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Button = () => {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
