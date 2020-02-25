import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ADIDAS, NIKES } from './constants';
import { Item } from '../../components';

export const RunningScreen = () => {
    const [mockData, setMockData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                const shortenedData = [];
                for (let i = 0; i < 50; i++) {
                    shortenedData.push(json[i]);
                }

                setMockData(shortenedData);
            });
    }, []);

    const createShoesFromMockData = isNike => {
        return mockData.map(({ userId, id, title }, index) => {
            const itemTitle = `${isNike ? 'Nike' : 'Adidas'} ${userId}`;
            const description = title.substring(0, title.indexOf(' '));
            const price = (Math.random(0, 1) * 500).toFixed(2);
            const imageIndex = isNike ? id % NIKES.length : id % ADIDAS.length;

            return (
                <Item
                    key={`${itemTitle}-${index}`}
                    title={itemTitle}
                    description={description}
                    price={price}
                    image={isNike ? NIKES[imageIndex] : ADIDAS[imageIndex]}
                />
            );
        });
    };

    return (
        <ScrollView contentContainerStyle={contentContainer}>
            <View style={itemWrapper}>
                <View>{createShoesFromMockData(true)}</View>
                <View>{createShoesFromMockData(false)}</View>
            </View>
        </ScrollView>
    );
};

const { contentContainer, itemWrapper } = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row'
    },
    contentContainer: {
        alignItems: 'center'
    }
});
