import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { CartContext } from '../../context/CartContext';
import { Content, Accordion } from 'native-base';
import {
    container,
    imageStyles,
    descriptionStyles,
    priceStyles
} from './Cart.css';

export const Cart = () => {
    const [cart] = useContext(CartContext);

    let totalPrice = 0;
    const accordionData = cart.map(({ image, title, description, price }) => {
        totalPrice += Number(price);
        return {
            title,
            content: (
                <CartItem
                    description={description}
                    price={price}
                    image={image}
                />
            )
        };
    });
    accordionData.push({ title: `Total: ${totalPrice.toFixed(2)}` });

    return (
        <Content>
            <Accordion dataArray={accordionData} />
        </Content>
    );
};

const CartItem = ({ description, price, image }) => {
    return (
        <View style={container}>
            <Image source={image} style={imageStyles} />
            <View>
                <Text style={descriptionStyles}>{description}</Text>
                <Text style={priceStyles}>{price}</Text>
            </View>
        </View>
    );
};
