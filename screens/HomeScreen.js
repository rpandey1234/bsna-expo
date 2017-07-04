import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Events from '../constants/Events.js';
import { MonoText } from '../components/StyledText';

export class Card extends React.Component {
  render() {
    return (
        <View style={styles.card}>
          <Text>{this.props.title}</Text>
          <Text>{this.props.location}</Text>
          <Text>{this.props.date}</Text>
          {this.props.link ? <Text style={styles.helpLinkText} onPress={() => Linking.openURL(this.props.link)}>More info</Text> : undefined }
        </View>
    )
  }
}

export class Loading extends React.Component {
  render() {
    return (<View style={styles.centerContent}>
      {this.props.loading ? <Image source={require('../assets/images/loading.gif')} style={styles.loadingImage}/> :
          undefined}
    </View>);
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor() {
    super();
    this.state =  {
      events: [],
      loading: true
    };
  }

  componentDidMount() {
    console.log("should make network call for data");
    this.setState({
      loading: false,
      events: Events.events,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <Loading loading={this.state.loading}/>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/icons/app-icon.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              Brahman Samaj of North America (BSNA) is the largest Brahman organization with the sole objective of
              bringing Brahmans together and helping them seek cultural and social identity.
            </Text>
          </View>

          <Text style={[styles.getStartedText, styles.bold]}>
            Upcoming Events
          </Text>
          {this.state.events.map(function(event, index) {
            return <Card key={index} title={event.title} location={event.location} date={event.date} link={event.link}/>
          })}

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'skyblue',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 6,
    ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 10,
        },
      })
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 140,
    height: 60,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  centerContent: {
    alignItems: 'center',
  },
  loadingImage: {
    resizeMode: 'contain',
    alignItems: 'center',
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
    lineHeight: 23,
    textAlign: 'center',
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
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
