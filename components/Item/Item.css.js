import { StyleSheet } from 'react-native';

export const {
    addToCartStyles,
    container,
    descriptionStyles,
    priceStyles,
    textWrapper,
    titleStyles,
    imageStyles
} = StyleSheet.create({
    addToCartStyles: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        paddingHorizontal: 8
    },
    container: {
        width: 200,
        alignItems: 'center',
        marginBottom: 30
    },
    descriptionStyles: {
        fontStyle: 'italic',
        marginBottom: 4
    },
    priceStyles: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8
    },
    textWrapper: {
        alignItems: 'center',
        width: '100%'
    },
    titleStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6
    },
    imageStyles: {
        borderRadius: 2,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    }
});
