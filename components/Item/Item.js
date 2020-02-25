import React from 'react';
import { Image, Text, View } from 'react-native';
import {
    container,
    welcomeImage,
    textWrapper,
    titleStyles,
    descriptionStyles,
    priceStyles
} from './Item.css';

const images = [require('../../assets/images/LeBrons.png')];

export const Item = ({ title, description, price, imageIndex }) => {
    return (
        <View style={container}>
            <Image source={images[imageIndex]} style={welcomeImage} />
            <View style={textWrapper}>
                <Text style={titleStyles}>{title}</Text>
                <Text style={descriptionStyles}>{description}</Text>
                <Text style={priceStyles}>{price}</Text>
            </View>
        </View>
    );
};
