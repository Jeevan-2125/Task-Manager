import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  variant?: 'primary' | 'outline';
}

export const Button = ({ title, isLoading, variant = 'primary', ...props }: ButtonProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity
      className={`
        h-14 rounded-xl flex-row justify-center items-center shadow-lg
        ${isPrimary ? 'bg-primary' : 'border border-primary bg-transparent'}
        ${props.disabled || isLoading ? 'opacity-70' : 'opacity-100'}
      `}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={isPrimary ? '#000' : '#FFD700'} className="mr-2" />
      ) : null}
      
      <Text className={`text-lg font-bold ${isPrimary ? 'text-white' : 'text-primary'}`}>
        {isLoading ? "Authenticating..." : title}
      </Text>
    </TouchableOpacity>
  );
};