import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'native-base';
import {
    addToCartStyles,
    container,
    imageStyles,
    textWrapper,
    titleStyles,
    descriptionStyles,
    priceStyles
} from './Item.css';
import { CartContext } from '../../context/CartContext';

export const Item = ({ title, description, price, image }) => {
    const [cart, setCart] = useContext(CartContext);

    const handleOnPress = () => {
        const newShoe = {
            title,
            description,
            price,
            image
        };
        setCart(currCart => [...currCart, newShoe]);
    };

    return (
        <View style={container}>
            <Image source={image} style={imageStyles} />
            <View style={textWrapper}>
                <Text style={titleStyles}>{title}</Text>
                <Text style={descriptionStyles}>{description}</Text>
                <Text style={priceStyles}>{price}</Text>
                <Button primary style={addToCartStyles} onPress={handleOnPress}>
                    <Text>Add to cart</Text>
                </Button>
            </View>
        </View>
    );
};
