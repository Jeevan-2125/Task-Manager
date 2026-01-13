import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// 👇 THIS LINE IS MANDATORY. DO YOU HAVE IT?
import "../global.css";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}