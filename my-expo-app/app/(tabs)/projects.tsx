import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

// --- Mock Data for Projects ---
const projectsData = [
  {
    id: 1,
    title: 'School Mgmt System',
    category: 'App Development',
    status: 'Ongoing',
    progress: 75,
    dueDate: 'Feb 20, 2026',
    members: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/86.jpg',
    ],
    color: '#FFD700', // Primary Yellow
  },
  {
    id: 2,
    title: 'Website Redesign',
    category: 'Design',
    status: 'Pending',
    progress: 30,
    dueDate: 'Mar 15, 2026',
    members: [
      'https://randomuser.me/api/portraits/women/65.jpg',
      'https://randomuser.me/api/portraits/men/22.jpg',
    ],
    color: '#A78BFA', // Purple
  },
  {
    id: 3,
    title: 'Database Migration',
    category: 'Backend',
    status: 'Completed',
    progress: 100,
    dueDate: 'Jan 10, 2026',
    members: [
      'https://randomuser.me/api/portraits/men/11.jpg',
    ],
    color: '#4ADE80', // Green
  },
  {
    id: 4,
    title: 'AVAIO Mobile App',
    category: 'React Native',
    status: 'Ongoing',
    progress: 45,
    dueDate: 'Apr 05, 2026',
    members: [
      'https://randomuser.me/api/portraits/men/5.jpg',
      'https://randomuser.me/api/portraits/women/12.jpg',
      'https://randomuser.me/api/portraits/men/9.jpg',
      'https://randomuser.me/api/portraits/women/33.jpg',
    ],
    color: '#F472B6', // Pink
  },
];

const FilterTab = ({ label, active, onPress }: { label: string, active: boolean, onPress: () => void }) => (
  <TouchableOpacity 
    onPress={onPress}
    className={`px-5 py-2 rounded-full mr-3 border ${active ? 'bg-primary border-primary' : 'bg-transparent border-gray-700'}`}
  >
    <Text className={`${active ? 'text-black font-bold' : 'text-gray-400 font-medium'} text-xs`}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function ProjectsScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter Logic
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.status === activeFilter);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Header */}
        <View className="flex-row justify-between items-center px-5 py-4 bg-surface/50 border-b border-gray-800">
          <View className="flex-row items-center">
            <Feather name="layers" size={20} color="#FFD700" style={{ marginRight: 8 }} />
            <Text className="text-white text-lg font-bold">My Projects</Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity onPress={() => router.back()} className="px-3 py-2 bg-surface rounded-lg border border-gray-700">
              <Feather name="arrow-left" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-2 bg-primary rounded-lg">
              <Feather name="plus" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 pt-6">
          {/* Search Bar */}
          <View className="flex-row items-center bg-surface border border-gray-700 rounded-xl px-4 py-3 mb-6">
            <Feather name="search" size={18} color="#9CA3AF" />
            <Text className="text-gray-500 ml-3 text-sm">Search projects...</Text>
          </View>

          {/* Filters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
            {['All', 'Ongoing', 'Pending', 'Completed'].map((tab) => (
              <FilterTab 
                key={tab} 
                label={tab} 
                active={activeFilter === tab} 
                onPress={() => setActiveFilter(tab)} 
              />
            ))}
          </ScrollView>

          {/* Projects Grid */}
          <View className="gap-y-4">
            {filteredProjects.map((item) => (
              <TouchableOpacity key={item.id} className="bg-surface p-5 rounded-2xl border border-gray-800 active:bg-gray-800">
                
                {/* Card Top: Category & Status */}
                <View className="flex-row justify-between items-start mb-3">
                  <View className="bg-background/60 px-3 py-1 rounded-lg border border-gray-700">
                    <Text className="text-gray-400 text-[10px] font-bold uppercase">{item.category}</Text>
                  </View>
                  <View className={`px-2 py-1 rounded-md ${item.status === 'Completed' ? 'bg-green-500/20' : 'bg-primary/20'}`}>
                    <Text className={`text-[10px] font-bold ${item.status === 'Completed' ? 'text-green-500' : 'text-primary'}`}>
                      {item.status}
                    </Text>
                  </View>
                </View>

                {/* Title */}
                <Text className="text-white text-lg font-bold mb-1">{item.title}</Text>
                <Text className="text-gray-500 text-xs mb-4">Due: {item.dueDate}</Text>

                {/* Progress Bar */}
                <View className="mb-4">
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-400 text-xs">Progress</Text>
                    <Text className="text-white text-xs font-bold">{item.progress}%</Text>
                  </View>
                  <View className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <View 
                      className="h-full rounded-full" 
                      style={{ width: `${item.progress}%`, backgroundColor: item.color }} 
                    />
                  </View>
                </View>

                {/* Footer: Team & Action */}
                <View className="flex-row justify-between items-center border-t border-gray-700 pt-4 mt-2">
                  
                  {/* Avatar Stack */}
                  <View className="flex-row pl-2">
                    {item.members.map((img, idx) => (
                      <Image 
                        key={idx}
                        source={{ uri: img }}
                        className="w-8 h-8 rounded-full border-2 border-surface -ml-2"
                      />
                    ))}
                    <View className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface -ml-2 items-center justify-center">
                      <Feather name="plus" size={12} color="white" />
                    </View>
                  </View>

                  <TouchableOpacity>
                     <Feather name="chevron-right" size={20} color="gray" />
                  </TouchableOpacity>

                </View>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}