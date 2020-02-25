import React from 'react';
import { View, Text } from 'react-native';
import { Item } from '../components';

export const BasketballScreen = () => {
    return (
        <View>
            <Item
                title='LeBron 17'
                description='The new LeBrons!'
                price='249.99'
                imageIndex={0}
            />
        </View>
    );
};
