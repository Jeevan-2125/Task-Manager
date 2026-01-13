import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  iconName: keyof typeof Feather.glyphMap;
  isPassword?: boolean;
}

export const Input = ({ iconName, isPassword, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-row items-center bg-surface border border-gray-800 rounded-xl h-14 px-4 mb-4 focus:border-primary">
      {/* Left Icon (Gold Color for active feel) */}
      <Feather name={iconName} size={20} color="#FFD700" style={{ marginRight: 12 }} />

      <TextInput
        className="flex-1 text-white text-base font-medium h-full"
        placeholderTextColor="#6B7280"
        secureTextEntry={isPassword && !showPassword}
        {...props}
      />

      {/* Password Visibility Toggle */}
      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather 
            name={showPassword ? "eye" : "eye-off"} 
            size={20} 
            color="#6B7280" 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};