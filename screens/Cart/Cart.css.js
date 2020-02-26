import { StyleSheet } from 'react-native';

export const {
    container,
    imageStyles,
    titleStyles,
    descriptionStyles,
    priceStyles
} = StyleSheet.create({
    container: {
        width: 200,
        alignItems: 'center',
        marginBottom: 30
    },
    imageStyles: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    },
    titleStyles: {
        fontSize: 12
    },
    descriptionStyles: {
        fontStyle: 'italic',
        fontSize: 14,
        marginBottom: 8
    },
    priceStyles: {
        fontWeight: 'bold'
    }
});
