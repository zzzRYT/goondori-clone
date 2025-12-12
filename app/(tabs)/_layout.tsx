import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ComponentProps } from 'react';

type Icon = ComponentProps<typeof FontAwesome>['name'];

interface Item {
  name: string;
  title: string;
  icon: Icon;
}

export default function TabLayout() {
  const TabItems: Item[] = [
    { name: 'home', title: '홈', icon: 'home' },
    { name: 'vacation', title: '휴가', icon: 'calendar' },
    {
      name: 'community',
      title: '커뮤니티',
      icon: 'comments',
    },
    { name: 'contents', title: '콘텐츠', icon: 'book' },
    {
      name: 'food-schedule',
      title: '식단표',
      icon: 'cutlery',
    },
    { name: 'benefits', title: '혜택', icon: 'ticket' },
  ];

  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: 'brown', headerShown: false }}
    >
      {TabItems.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.title,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name={item.icon} color={color} />
            ),
          }}
        ></Tabs.Screen>
      ))}
    </Tabs>
  );
}
