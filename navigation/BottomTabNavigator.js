import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { HomeScreen, BasketballScreen, RunningScreen, TennisScreen } from '../screens';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Running"
        component={RunningScreen}
        options={{
          title: 'Running',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-ribbon" />,
        }}
      />
      <BottomTab.Screen
        name="Basketball"
        component={BasketballScreen}
        options={{
          title: 'Basketball',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-basketball" />,
        }}
      />
      <BottomTab.Screen
        name="Tennis"
        component={TennisScreen}
        options={{
          title: 'Tennis',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-tennisball" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Running':
      return 'All Running Shoes';
    case 'Basketball':
      return 'All Basketball Shoes';
    case 'Tennis':
      return 'All Tennis Shoes';
  }
}
