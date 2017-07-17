import React from 'react';
import { Button, Dimensions, Image, Linking, Platform, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Events from '../constants/Events.js';
import { MonoText } from '../components/StyledText';

export class Loading extends React.Component {
  render() {
    return <View>
      {this.props.loading ? <Image source={require('../assets/images/loading.gif')} style={styles.loadingImage}/> :
          undefined}
    </View>;
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
    this.setState({
      loading: false,
      events: Events.events,
      email: "",
      message: ""
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

          <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                width: Dimensions.get('window').width,
                marginTop: 16
              }}
              />
          <View style={styles.inputView}>
            <Text>Sign up for information about BSNA or leave a comment.</Text>
            <TextInput style={styles.inputField} keyboardType={'email-address'} placeholder={'Email'} value={this.state.email} onChangeText={(text) => this.setState({email: text})} autoCapitalize={'none'}/>
            <TextInput style={styles.inputField} multiline={true} numberOfLines={3} placeholder={'Message'} value={this.state.message} onChangeText={(text) => this.setState({message: text})}/>
            <Button title={"Submit"} onPress={this._handleButtonSubmit} disabled={this.state.email == undefined || this.state.email.length < 4 || !this._validateEmail(this.state.email)} />
          </View>
          <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                width: Dimensions.get('window').width,
              }}
              />
          {this.state.events.map(function(event, index) {
            return <View key={index} style={styles.card}>
              <Text style={styles.bold}>{event.title}</Text>
              <Text>{event.location}</Text>
              <Text>{event.date}</Text>
              {event.link ? <Text style={styles.helpLinkText} onPress={() => Linking.openURL(event.link)}>More info</Text> : undefined }
              <Text style={styles.details}>{event.details}</Text>
            </View>;
          })}

        </ScrollView>
      </View>
    );
  }

  _handleButtonSubmit = () => {
    console.log("buitton submit");
    if (!this.state.email) {
      console.log("please add an email address before submitting");
    }
  };

  _validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 20,
  },
  inputView: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  inputField: {
    height: 50,
    marginVertical: 10,
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
  },
  loadingImage: {
    resizeMode: 'contain',
    alignItems: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
  helpLinkText: {
    fontSize: 18,
    color: '#2e78b7',
  },
  details: {
    marginTop: 15,
  },
  card: {
    backgroundColor: 'oldlace',
    marginVertical: 40,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
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
  }
});
