import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function AttendanceScreen() {
  const router = useRouter();
  const [selectedMonth, setSelectedMonth] = useState('January 2026');

  // Mock data for stats
  const stats = [
    { icon: 'check-circle', label: 'Present Days', count: 6, color: '#4ADE80' },
    { icon: 'x-circle', label: 'Absent Days', count: 16, color: '#F87171' },
    { icon: 'clock', label: 'Late Arrivals', count: 3, color: '#FBBF24' },
    { icon: 'log-out', label: 'Early Departures', count: 0, color: '#FBBF24' },
    { icon: 'calendar', label: 'Remaining Leaves', count: 27, color: '#A78BFA' },
  ];

  // Mock data for calendar days (January 2026)
  const calendarDays = [
    { day: 28, status: 'inactive', prevMonth: true }, { day: 29, status: 'inactive', prevMonth: true }, { day: 30, status: 'inactive', prevMonth: true }, { day: 31, status: 'inactive', prevMonth: true },
    { day: 1, status: 'holiday', label: 'New Year' }, { day: 2, status: 'present', time: '09:00 AM - 05:00 PM' }, { day: 3, status: 'weekend' },
    { day: 4, status: 'weekend' }, { day: 5, status: 'late', time: '10:15 AM - 05:00 PM' }, { day: 6, status: 'present', time: '09:00 AM - 05:00 PM' }, { day: 7, status: 'present', time: '09:00 AM - 05:00 PM' }, { day: 8, status: 'absent', label: 'Sick Leave' }, { day: 9, status: 'present', time: '09:00 AM - 05:00 PM' }, { day: 10, status: 'weekend' },
    { day: 11, status: 'weekend' }, { day: 12, status: 'present', time: '09:00 AM - 05:00 PM' }, { day: 13, status: 'present', time: '09:00 AM - 05:00 PM' }, { day: 14, status: 'today', time: '09:00 AM - ...' }, { day: 15, status: 'future' }, { day: 16, status: 'future' }, { day: 17, status: 'weekend' },
    { day: 18, status: 'weekend' }, { day: 19, status: 'future' }, { day: 20, status: 'future' }, { day: 21, status: 'future' }, { day: 22, status: 'future' }, { day: 23, status: 'future' }, { day: 24, status: 'weekend' },
    { day: 25, status: 'weekend' }, { day: 26, status: 'future' }, { day: 27, status: 'future' }, { day: 28, status: 'future' }, { day: 29, status: 'future' }, { day: 30, status: 'future' }, { day: 31, status: 'weekend' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'present': return { bg: 'bg-green-500/20', text: 'text-green-500', border: 'border-green-500/50' };
      case 'absent': return { bg: 'bg-red-500/20', text: 'text-red-500', border: 'border-red-500/50' };
      case 'late': return { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50' };
      case 'holiday': return { bg: 'bg-purple-500/20', text: 'text-purple-500', border: 'border-purple-500/50' };
      case 'today': return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary' };
      case 'weekend': return { bg: 'bg-surface', text: 'text-gray-500', border: 'border-gray-800' };
      case 'future': return { bg: 'bg-surface', text: 'text-white', border: 'border-gray-800' };
      case 'inactive': return { bg: 'bg-transparent', text: 'text-gray-600', border: 'border-transparent' };
      default: return { bg: 'bg-surface', text: 'text-white', border: 'border-gray-800' };
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-5 py-4 bg-surface/50 border-b border-gray-800">
          <View className="flex-row items-center">
            <Feather name="calendar" size={20} color="#FFD700" style={{ marginRight: 8 }} />
            <Text className="text-white text-lg font-bold">Attendance</Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity onPress={() => router.back()} className="px-3 py-2 bg-surface rounded-lg border border-gray-700">
              <Feather name="arrow-left" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-2 bg-primary rounded-lg">
              <Feather name="log-out" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 pt-6">
          <Text className="text-2xl font-bold text-primary mb-6">Attendance Mgmt.</Text>

          {/* User Card */}
          <View className="bg-surface p-4 rounded-2xl border border-gray-800 mb-6">
            <View className="flex-row justify-between items-start mb-4">
              <View>
                <Text className="text-lg font-bold text-white mb-1">Chandan B</Text>
                <View className="flex-row items-center">
                  <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  <Text className="text-green-500 text-xs">Active</Text>
                </View>
              </View>
              <TouchableOpacity className="p-2 bg-surface rounded-lg border border-gray-700">
                <Feather name="more-vertical" size={16} color="white" />
              </TouchableOpacity>
            </View>

            {/* User Stats - Flex Wrap for Mobile */}
            <View className="flex-row flex-wrap gap-3 mb-5">
              <View className="bg-background/50 px-3 py-3 rounded-xl border border-gray-800 w-[48%]">
                <View className="flex-row items-center mb-1">
                  <Feather name="calendar" size={12} color="#9CA3AF" style={{ marginRight: 4 }} />
                  <Text className="text-gray-400 text-[10px]">Date</Text>
                </View>
                <Text className="text-white text-sm font-bold">Jan 14, 2026</Text>
              </View>
              
              <View className="bg-background/50 px-3 py-3 rounded-xl border border-gray-800 w-[48%]">
                <View className="flex-row items-center mb-1">
                  <Feather name="clock" size={12} color="#9CA3AF" style={{ marginRight: 4 }} />
                  <Text className="text-gray-400 text-[10px]">Check-in</Text>
                </View>
                <Text className="text-white text-sm font-bold">10:30 AM</Text>
              </View>

              <View className="bg-background/50 px-3 py-3 rounded-xl border border-gray-800 w-full">
                <View className="flex-row items-center mb-1">
                  <Feather name="watch" size={12} color="#9CA3AF" style={{ marginRight: 4 }} />
                  <Text className="text-gray-400 text-[10px]">Duration</Text>
                </View>
                <Text className="text-white text-sm font-bold">01h : 30m : 45s</Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 bg-red-500/90 py-3 rounded-xl flex-row justify-center items-center">
                <Text className="text-white font-bold text-sm">End Session</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-surface border border-gray-700 py-3 rounded-xl flex-row justify-center items-center">
                <Feather name="refresh-cw" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats Grid - Adjusted spacing */}
          <View className="flex-row flex-wrap gap-3 mb-6">
            {stats.map((stat, index) => (
              <View key={index} className="bg-surface p-3 rounded-2xl border border-gray-800 w-[30%] grow items-center">
                <View className={`p-2 rounded-full mb-2`} style={{ backgroundColor: `${stat.color}20` }}>
                  <Feather name={stat.icon as any} size={16} color={stat.color} />
                </View>
                <Text className="text-2xl font-bold text-white mb-1">{stat.count}</Text>
                <Text className="text-gray-400 text-[10px] text-center">{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* Filter Section - Stacked for Mobile */}
          <View className="bg-surface p-4 rounded-2xl border border-gray-800 mb-6">
            <Text className="text-gray-400 text-xs mb-2">Select Month</Text>
            <View className="flex-col gap-3">
              <TouchableOpacity className="w-full bg-background/50 px-4 py-3 rounded-xl border border-gray-700 flex-row justify-between items-center">
                <Text className="text-white">{selectedMonth}</Text>
                <Feather name="chevron-down" size={16} color="white" />
              </TouchableOpacity>
              
              <View className="flex-row gap-3">
                <TouchableOpacity className="flex-1 bg-primary py-3 rounded-xl justify-center items-center">
                  <Text className="text-black font-bold">Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-surface py-3 rounded-xl border border-gray-700 justify-center items-center">
                  <Text className="text-white font-bold">Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Calendar Section */}
          <View className="bg-surface p-3 rounded-2xl border border-gray-800 mb-6">
            <View className="flex-row justify-between items-center mb-6 px-2">
              <Text className="text-lg font-bold text-white">Jan 2026</Text>
              <View className="flex-row gap-2">
                <View className="flex-row items-center bg-surface border border-gray-700 px-2 py-1 rounded-lg">
                  <View className="w-2 h-2 rounded-full bg-green-400 mr-2"/>
                  <Text className="text-white text-[10px]">In</Text>
                </View>
                <TouchableOpacity className="flex-row items-center bg-primary px-3 py-1 rounded-lg">
                  <Text className="text-black text-[10px] font-bold">Today</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Day Names */}
            <View className="flex-row justify-between mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <Text key={index} className="text-gray-500 text-xs font-bold w-[13.5%] text-center">{day}</Text>
              ))}
            </View>

            {/* Calendar Grid - Mobile Optimized */}
            <View className="flex-row flex-wrap justify-between">
              {calendarDays.map((item, index) => {
                const style = getStatusStyle(item.status);
                return (
                  <View key={index} className={`w-[13.5%] aspect-square mb-2 rounded-lg border ${style.bg} ${style.border} items-center justify-center`}>
                    <Text className={`text-xs font-bold ${style.text}`}>{item.day}</Text>
                    {/* Visual Dot for details instead of text */}
                    {(item.status === 'present' || item.status === 'late') && (
                        <View className={`w-1 h-1 rounded-full mt-1 ${item.status === 'present' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    )}
                     {item.status === 'today' && <View className="w-1 h-1 bg-primary rounded-full mt-1" />}
                  </View>
                );
              })}
            </View>
          </View>

          {/* Legend */}
          <View className="flex-row flex-wrap gap-x-4 gap-y-2 justify-center px-4">
            <View className="flex-row items-center"><View className="w-2 h-2 rounded-full bg-green-500 mr-2" /><Text className="text-gray-400 text-[10px]">Present</Text></View>
            <View className="flex-row items-center"><View className="w-2 h-2 rounded-full bg-red-500 mr-2" /><Text className="text-gray-400 text-[10px]">Absent</Text></View>
            <View className="flex-row items-center"><View className="w-2 h-2 rounded-full bg-yellow-500 mr-2" /><Text className="text-gray-400 text-[10px]">Late</Text></View>
            <View className="flex-row items-center"><View className="w-2 h-2 rounded-full bg-purple-500 mr-2" /><Text className="text-gray-400 text-[10px]">Leave</Text></View>
            <View className="flex-row items-center"><View className="w-2 h-2 rounded-full bg-primary mr-2" /><Text className="text-gray-400 text-[10px]">Today</Text></View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}