import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "tomato" }}>
      <StatusBar></StatusBar>
    </View>
  );
}
