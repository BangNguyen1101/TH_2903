import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function NotificationBadge() {
  return (
    <View style={styles.notificationBadge}>
      <Text style={styles.badgeText}>●</Text>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Scan') {
            iconName = 'scan';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return (
            <View style={{ position: 'relative' }}>
              <Ionicons name={iconName} size={size} color={color} />
              {route.name === 'Notifications' && <NotificationBadge />}
            </View>
          );
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
          backgroundColor: '#f8f8f8',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
