import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-5 pt-6">
        
        {/* Header Section */}
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-gray-400 text-sm font-medium">13 Jan 2026</Text>
            <Text className="text-white text-2xl font-bold">Welcome, Chandan 👋</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 bg-surface rounded-full items-center justify-center border border-gray-800">
            <Feather name="bell" size={20} color="#FFD700" />
          </TouchableOpacity>
        </View>

        {/* Stats Widget (The "0 Total Tasks" Card) */}
        <View className="bg-surface rounded-2xl p-5 mb-6 border border-gray-800 shadow-sm">
          <Text className="text-white text-lg font-bold mb-4">Overview</Text>
          
          <View className="flex-row items-center">
            {/* Circular Progress Placeholder */}
            <View className="w-24 h-24 rounded-full border-8 border-gray-800 items-center justify-center mr-6">
               <Text className="text-white text-xl font-bold">0</Text>
               <Text className="text-gray-500 text-[8px] uppercase">Tasks</Text>
            </View>

            {/* Legend */}
            <View className="flex-1 space-y-3">
              <StatRow label="Pending" count={0} color="bg-orange-500" />
              <StatRow label="In Progress" count={0} color="bg-blue-500" />
              <StatRow label="Completed" count={0} color="bg-green-500" />
            </View>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <Text className="text-white text-lg font-bold mb-4">Quick Actions</Text>
        <View className="flex-row flex-wrap justify-between gap-y-4">
          
          {/* ✅ LINKED: Attendance Button */}
          <ActionButton 
            icon="calendar" 
            label="Attendance" 
            onPress={() => router.push('/attendance')} 
          />

          <ActionButton icon="coffee" label="Apply Leave" />
          <ActionButton icon="file-text" label="Reports" />
          
          {/* Logout Button */}
          <ActionButton 
            icon="log-out" 
            label="Logout" 
            onPress={() => router.replace('/(auth)/login')} 
          />
        </View>

        {/* Recent Tasks Header */}
        <View className="flex-row justify-between items-center mt-8 mb-4">
          <Text className="text-white text-lg font-bold">Recent Tasks</Text>
          <TouchableOpacity>
             <Text className="text-primary text-sm font-medium">See All</Text>
          </TouchableOpacity>
        </View>

        {/* Empty State */}
        <View className="items-center py-10 opacity-50">
           <Feather name="inbox" size={40} color="#6B7280" />
           <Text className="text-gray-500 mt-2">No tasks found</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- Local Helper Components ---

const StatRow = ({ label, count, color }: { label: string, count: number, color: string }) => (
  <View className="flex-row items-center justify-between mb-2">
    <View className="flex-row items-center">
      <View className={`w-2 h-2 rounded-full ${color} mr-2`} />
      <Text className="text-gray-400 text-xs">{label}</Text>
    </View>
    <Text className="text-white font-bold text-xs">{count}</Text>
  </View>
);

const ActionButton = ({ icon, label, onPress }: { icon: keyof typeof Feather.glyphMap, label: string, onPress?: () => void }) => (
  <TouchableOpacity 
    onPress={onPress}
    className="w-[48%] bg-surface p-4 rounded-xl border border-gray-800 flex-row items-center justify-center mb-2 active:bg-gray-800"
  >
    <Feather name={icon} size={18} color="#FFD700" style={{ marginRight: 8 }} />
    <Text className="text-white font-medium text-sm">{label}</Text>
  </TouchableOpacity>
);