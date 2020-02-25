import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';

import {
    container,
    contentContainer,
    getStartedContainer,
    shopButton,
    shopButtonText,
    shopButtonContainer,
    welcomeImage,
    welcomeText
} from './HomeScreen.css';

export const HomeScreen = ({ navigation }) => {
    const handleOnRunningPress = () => {
        navigation.navigate('Running');
    };

    const handleOnBasketballPress = () => {
        navigation.navigate('Basketball');
    };

    const handleOnTennisPress = () => {
        navigation.navigate('Tennis');
    };

    return (
        <View style={container}>
            <ScrollView
                style={container}
                contentContainerStyle={contentContainer}
            >
                <View style={getStartedContainer}>
                    <Text style={welcomeText}>
                        Welcome to the Shoe Emporium!
                    </Text>
                    <Image
                        source={require('../../assets/images/basketball1.png')}
                        style={welcomeImage}
                    />

                    <View style={shopButtonContainer}>
                        <Button
                            primary
                            onPress={handleOnRunningPress}
                            style={shopButton}
                        >
                            <Text style={shopButtonText}>Shop Running</Text>
                        </Button>
                        <Button
                            primary
                            onPress={handleOnBasketballPress}
                            style={shopButton}
                        >
                            <Text style={shopButtonText}>Shop Basketball</Text>
                        </Button>
                        <Button
                            primary
                            onPress={handleOnTennisPress}
                            style={shopButton}
                        >
                            <Text style={shopButtonText}>Shop Tennis</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

HomeScreen.navigationOptions = {
    header: null
};
