import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Icon } from 'native-base';

import TabBarIcon from '../components/TabBarIcon';
import {
    HomeScreen,
    BasketballScreen,
    RunningScreen,
    TennisScreen
} from '../screens';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const { icon, shoppingCart } = StyleSheet.create({
    shoppingCart: {
        marginRight: 4
    },
    icon: {
        color: 'green'
    }
});

export default function BottomTabNavigator({ navigation, route }) {
    const handleOnPress = () => {
        navigation.navigate('Cart');
    };

    navigation.setOptions({
        headerTitle: getHeaderTitle(route),
        headerRight: () => (
            <Button transparent style={shoppingCart} onPress={handleOnPress}>
                <Icon name='cart' style={icon} />
            </Button>
        )
    });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='md-home' />
                    )
                }}
            />
            <BottomTab.Screen
                name='Running'
                component={RunningScreen}
                options={{
                    title: 'Running',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='md-ribbon' />
                    )
                }}
            />
            <BottomTab.Screen
                name='Basketball'
                component={BasketballScreen}
                options={{
                    title: 'Basketball',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='md-basketball' />
                    )
                }}
            />
            <BottomTab.Screen
                name='Tennis'
                component={TennisScreen}
                options={{
                    title: 'Tennis',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='md-tennisball' />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName =
        route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'Running':
            return 'All Running Shoes';
        case 'Basketball':
            return 'All Basketball Shoes';
        case 'Tennis':
            return 'All Tennis Shoes';
        case 'Cart':
            return 'Shopping Cart';
    }
}
