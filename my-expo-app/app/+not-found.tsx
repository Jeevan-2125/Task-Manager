import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F1015' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>This screen doesn't exist.</Text>
        <Link href="/" style={{ marginTop: 15, padding: 10 }}>
          <Text style={{ color: '#FFD700' }}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}