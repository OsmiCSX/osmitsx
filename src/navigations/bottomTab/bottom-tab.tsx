import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/home';

export type TabParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const MainBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
        }}
        name="Home"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};
