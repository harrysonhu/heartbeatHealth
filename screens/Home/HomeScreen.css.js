import { StyleSheet } from 'react-native';

export const {
    container,
    getStartedContainer,
    shopButtonContainer,
    shopButtonText,
    shopButton,
    welcomeImage,
    welcomeContainer
} = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    shopButtonContainer: {
        marginTop: 50,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    shopButton: {
        backgroundColor: '#C0C0C0',
        padding: 8,
        borderRadius: 8
    },
    shopButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1.02
    },
    contentContainer: {
        paddingTop: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 400,
        height: 300,
        resizeMode: 'center',
        marginTop: 3,
        marginLeft: -10
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50
    }
});
