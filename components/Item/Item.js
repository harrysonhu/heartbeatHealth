import React from 'react';
import { Image, Text, View } from 'react-native';
import {
    container,
    imageStyles,
    textWrapper,
    titleStyles,
    descriptionStyles,
    priceStyles
} from './Item.css';

export const Item = ({ title, description, price, image }) => {
    return (
        <View style={container}>
            <Image source={image} style={imageStyles} />
            <View style={textWrapper}>
                <Text style={titleStyles}>{title}</Text>
                <Text style={descriptionStyles}>{description}</Text>
                <Text style={priceStyles}>{price}</Text>
            </View>
        </View>
    );
};
