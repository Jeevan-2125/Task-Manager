import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function LandingPage() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />
      
      {/* Background decoration (optional subtle circles) */}
      <View className="absolute top-20 -left-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl" />
      <View className="absolute bottom-20 -right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top Header Icon */}
        <View className="px-6 pt-4">
          <View className="w-12 h-12 bg-surface rounded-xl items-center justify-center border border-gray-800">
            <Feather name="list" size={24} color="#FFD700" />
          </View>
        </View>

        {/* Main Content Area */}
        <View className="flex-1 justify-center px-6 py-10">
          
          {/* The Central Card */}
          <View className="bg-surface p-8 rounded-3xl border border-gray-800 shadow-2xl">
            
            {/* Titles */}
            <Text className="text-center text-4xl font-bold text-primary mb-2">
              Welcome to AVAIO
            </Text>
            <Text className="text-center text-3xl font-bold text-primary mb-6">
              Digital World
            </Text>
            
            <Text className="text-gray-400 text-center text-base leading-6 mb-8">
              Manage projects, assign tasks, and boost team efficiency — all in one intelligent platform.
            </Text>

            {/* Feature Pills */}
            <View className="flex-row flex-wrap justify-center gap-3 mb-10">
              <FeaturePill icon="check-circle" label="Task Tracking" />
              <FeaturePill icon="users" label="Team Collaboration" />
              <FeaturePill icon="trending-up" label="Productivity Analytics" />
            </View>

            {/* Action Buttons */}
            <View className="flex-row justify-between gap-4">
              {/* Primary Button: Get Started */}
              <TouchableOpacity 
                className="flex-1 bg-primary h-14 rounded-xl flex-row justify-center items-center shadow-lg shadow-primary/20"
                onPress={() => router.push('/(auth)/login')} // Linking to login for now
              >
                <Feather name="user-plus" size={20} color="black" style={{ marginRight: 8 }} />
                <Text className="text-black text-xs font-bold">Get Started Free</Text>
              </TouchableOpacity>

              {/* Secondary Button: Sign In */}
              <TouchableOpacity 
                className="flex-1 bg-transparent border border-gray-700 h-14 rounded-xl flex-row justify-center items-center"
                onPress={() => router.push('/(auth)/login')}
              >
                <Feather name="log-in" size={20} color="white" style={{ marginRight: 8 }} />
                <Text className="text-white text-base font-bold">Sign In</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Component for the "Pills"
const FeaturePill = ({ icon, label }: { icon: keyof typeof Feather.glyphMap; label: string }) => (
  <View className="flex-row items-center bg-black/40 px-4 py-2 rounded-full border border-primary/20">
    <Feather name={icon} size={14} color="#FFD700" style={{ marginRight: 6 }} />
    <Text className="text-primary text-xs font-medium">{label}</Text>
  </View>
);