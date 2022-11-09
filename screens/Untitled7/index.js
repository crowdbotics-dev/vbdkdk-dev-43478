import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled7 = ({
  navigation
}) => {
  return <View style={_styles.qrSgoRcH}>
      <Pressable onPress={() => navigation.navigate("Untitled8")} style={_styles.hMNxamGv}><Text style={_styles.jFmqggNM}>Lorem ipsum…</Text></Pressable></View>;
};

export default Untitled7;

const _styles = StyleSheet.create({
  qrSgoRcH: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  jFmqggNM: {
    left: 145,
    top: 63,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  hMNxamGv: {
    position: "unset"
  }
});