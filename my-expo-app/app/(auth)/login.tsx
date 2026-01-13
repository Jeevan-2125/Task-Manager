import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // ✅ Correct Import
import { StatusBar } from 'expo-status-bar'; // ✅ Use Expo's Status Bar

import { Input } from '../../src/components/Input';
import { Button } from '../../src/components/Button';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('chandanbakshi460@gmail.com');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(tabs)'); 
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* ✅ Correct StatusBar Usage */}
      <StatusBar style="light" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-6"
      >
        
        {/* Header Section */}
        <View className="items-center mb-10">
          <View className="w-16 h-16 bg-surface rounded-2xl items-center justify-center mb-4 border border-gray-800">
             <Feather name="layers" size={32} color="#FFD700" />
          </View>
          <Text className="text-4xl font-bold text-primary mb-2">Welcome Back</Text>
          <Text className="text-gray-400 text-center">
            Sign in to access your AVAIO workspace
          </Text>
        </View>

        {/* Security Badge */}
        <View className="bg-surface border border-gray-800 rounded-lg p-3 mb-8 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Feather name="shield" size={14} color="#6C5DD3" />
            <Text className="text-gray-400 text-xs ml-2">Secure Login | IP:</Text>
          </View>
          <Text className="text-primary text-xs font-mono">49.37.180.95</Text>
        </View>

        {/* Form Section */}
        <View className="space-y-4">
          <Input 
            iconName="mail" 
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Input 
            iconName="lock" 
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
          />

          <Button 
            title="Sign In" 
            onPress={handleLogin} 
            isLoading={isLoading} 
            className="mt-4"
          />
        </View>

        {/* Footer Actions */}
        <View className="flex-row justify-between mt-8">
          <TouchableOpacity>
            <Text className="text-primary font-medium">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-primary font-medium">Create Account</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}