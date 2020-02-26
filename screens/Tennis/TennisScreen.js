import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Item } from '../../components';
import { LOWTOP, HIGHTOP } from './constants';

export const TennisScreen = () => {
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

    const createShoesFromMockData = isLowTop => {
        return mockData.map(({ userId, id, title }, index) => {
            const itemTitle = `${isLowTop ? 'Low' : 'High'} ${userId}`;
            const description = title.substring(0, title.indexOf(' '));
            const price = (Math.random(0, 1) * 500).toFixed(2);
            const imageIndex = isLowTop
                ? id % LOWTOP.length
                : id % HIGHTOP.length;

            return (
                <Item
                    key={`${itemTitle}-${index}`}
                    title={itemTitle}
                    description={description}
                    price={price}
                    image={isLowTop ? LOWTOP[imageIndex] : HIGHTOP[imageIndex]}
                />
            );
        });
    };

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <View>{createShoesFromMockData(true)}</View>
                <View>{createShoesFromMockData(false)}</View>
            </View>
        </ScrollView>
    );
};
