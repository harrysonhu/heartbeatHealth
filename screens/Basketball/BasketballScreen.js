import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Item } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { KOBES, LEBRONS } from './constants';

export const BasketballScreen = () => {
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
                console.log(shortenedData);
            });
    }, []);

    const createShoesFromMockData = isLebron => {
        return mockData.map(({ userId, id, title }, index) => {
            const itemTitle = `${isLebron ? 'LeBron' : 'Kobe'} ${userId}`;
            const description = title.substring(0, title.indexOf(' '));
            const price = (Math.random(0, 1) * 500).toFixed(2);
            const imageIndex = isLebron
                ? id % LEBRONS.length
                : id % KOBES.length;

            return (
                <Item
                    key={`${itemTitle}-${index}`}
                    title={itemTitle}
                    description={description}
                    price={price}
                    image={isLebron ? LEBRONS[imageIndex] : KOBES[imageIndex]}
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
