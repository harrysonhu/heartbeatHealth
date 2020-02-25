import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';

export const HomeScreen = ({ navigation }) => {

  const handleOnRunningPress = () => {
    navigation.navigate('Running');
  }

  const handleOnBasketballPress = () => {
    navigation.navigate('Basketball');
  }

  const handleOnTennisPress = () => {
    navigation.navigate('Tennis');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text>Welcome to the Home Page</Text>
          <Image source={require('../assets/images/LeBrons.png')} style={styles.welcomeImage} />

          <View style={styles.shopButtonContainer}>
            <Button primary onPress={handleOnRunningPress} style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Shop Running</Text>
            </Button>
            <Button primary onPress={handleOnBasketballPress} style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Shop Basketball</Text>
            </Button>
            <Button primary onPress={handleOnTennisPress} style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Shop Tennis</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shopButtonContainer: {
    marginTop: 50,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  shopButton: {
    padding: 8,
    borderRadius: 8
  },
  shopButtonText: {
    color: 'white'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 600,
    height: 500,
    resizeMode: 'center',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
