import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import Officers from '../constants/Officers.js';

export class OfficerRow extends React.Component {
  render() {
    return (
        <View style={styles.tableRow}>
          <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>
          <Text>{this.props.name}</Text>
          <Text style={{color: '#2e78b7'}} onPress={() => this._handleEmailPress("mailto:" + this.props.email)}>{this.props.email}</Text>
        </View>
    )
  }

  _handleEmailPress = (mailToLink) => {
    Linking.openURL(mailToLink);
  };
}

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact info',
  };

  constructor() {
    super();
    this.state =  {
      officers: [],
    };
  }

  componentDidMount() {
    console.log("should make network call for data");
    this.setState({
      officers: Officers.officers,
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.descriptionContainer}>Executive Committee (EC) for 2016 - 2018 Term</Text>
        {this.state.officers.map(function(officer, index) {
          return <OfficerRow key={index} title={officer.title} name={officer.name} email={officer.email} />
        })}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  descriptionContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
  },
  tableRow: {
    marginVertical: 10,
    marginHorizontal: 20,
  }
});
