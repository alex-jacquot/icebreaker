import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import Home from "../components/Home/Home";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="questions"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="filters"
        options={{ headerShown: false }}
      /> 
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
