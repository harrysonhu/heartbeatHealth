import { StyleSheet } from 'react-native';

export const {
    container,
    descriptionStyles,
    priceStyles,
    textWrapper,
    titleStyles,
    welcomeImage
} = StyleSheet.create({
    container: {
        width: 400
    },
    descriptionStyles: {
        fontStyle: 'italic',
        marginBottom: 4
    },
    priceStyles: {
        fontSize: 14,
        fontWeight: 'bold'
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
    welcomeImage: {
        borderRadius: 2,
        width: 400,
        height: 300,
        resizeMode: 'center',
        marginTop: 3,
        marginLeft: -10
    }
});
