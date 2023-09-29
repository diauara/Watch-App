import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Text } from '../../components/Themed';
import Edit from '../../components/headerIcons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'orange',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'World Clock',
          tabBarIcon: ({ color }) => <TabBarIcon name="globe-outline" color={color} />,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name='add'
                    size={25}
                    color= 'orange'
                    style={{ marginRight: 15, opacity: pressed ? 0.1 : 1 }} 
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: Edit,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Alarm',
          tabBarIcon: ({ color }) => <TabBarIcon name="alarm" color={color} />,
          headerRight: () => (
            <Link href='/modal2' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name='add'
                    size={25}
                    color= 'orange'
                    style={{ marginRight: 15, opacity: pressed ? 0.1 : 1 }} 
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: Edit,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Stopwatch',
          tabBarIcon: ({ color }) => <TabBarIcon name="stopwatch" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Timer',
          tabBarIcon: ({ color }) => <TabBarIcon name="timer-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
