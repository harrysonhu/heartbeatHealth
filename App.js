import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'native-base';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import { Provider } from './context/CartContext';
import { Cart } from './screens';

const Stack = createStackNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [
        initialNavigationState,
        setInitialNavigationState
    ] = React.useState();
    const containerRef = React.useRef();
    const { getInitialState } = useLinking(containerRef);
    const [cart, setCart] = useState([]);

    const handleClearCart = () => {
        setCart([]);
    };

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <Provider value={[cart, setCart]}>
                <View style={container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
                    <NavigationContainer
                        ref={containerRef}
                        initialState={initialNavigationState}
                    >
                        <Stack.Navigator>
                            <Stack.Screen
                                name='Root'
                                component={BottomTabNavigator}
                            />
                            <Stack.Screen
                                name='Cart'
                                component={Cart}
                                options={{
                                    headerRight: () => (
                                        <Button
                                            primary
                                            style={clearCartButtonStyles}
                                            onPress={handleClearCart}
                                        >
                                            <Text style={clearCartTextStyles}>
                                                Clear Cart
                                            </Text>
                                        </Button>
                                    )
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

const {
    container,
    clearCartButtonStyles,
    clearCartTextStyles
} = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    clearCartButtonStyles: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginRight: 8
    },
    clearCartTextStyles: {
        fontWeight: 'bold'
    }
});
