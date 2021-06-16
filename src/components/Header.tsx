import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  SwitchProps,
  StatusBar,
  StyleSheet,
} from "react-native";

interface ThemeSwitch extends SwitchProps {
  isDarkEnabled: boolean;
}

export function Header({ onValueChange, isDarkEnabled }: ThemeSwitch) {
  return (
    <View
      style={[
        styles.header,
        !isDarkEnabled
          ? { backgroundColor: "#273FAD" }
          : { backgroundColor: "#483C67" },
      ]}
    >
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>

      <Switch
        trackColor={{ false: "#767577", true: "#988BC7" }}
        thumbColor={isDarkEnabled ? "#67E480" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={isDarkEnabled}
        style={styles.switchButton}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  switchButton: {
    position: "absolute",
    right: 30,
    top: 30,
  },
});
