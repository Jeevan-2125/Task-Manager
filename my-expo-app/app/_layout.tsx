import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import React from "react";

// 👇 THIS LINE IS MANDATORY. DO YOU HAVE IT?
// import "../global.css";


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