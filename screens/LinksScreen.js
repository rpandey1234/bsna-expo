import React from 'react';
import { Button, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Documents and Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.descriptionContainer}>About BSNA</Text>
          <Text>Brahman Samaj of North America (BSNA) is the largest Brahman organization with sole objective of
            bringing Brahmans together and helps them seek their own cultural and social identity.
            It endeavors to create an international community of Brahmans. BSNA has won the acceptance and respect
            of a large number of highly distinguished people from all over the world. Our network and membership
            includes scientists, engineers, doctors, lawyers, industrialists, and professionals
            from all walks of life. BSNA strongly disapproves the evils of the Hindu caste system.
          </Text>

          <Text style={styles.descriptionContainer}>BSNA Publications</Text>

          <Text style={styles.publicationText} onPress={() => this._handleLink("http://www.bsnaconvention.info/BV-BJ_July_2016.pdf")}>
            ∙ Brahma Vani 2016 (PDF, 81 pages)
          </Text>
          <Text style={styles.publicationText} onPress={() => this._handleLink("http://www.bsnaconvention.info/BB_Volume_18_No_1.pdf")}>
            ∙ Brahma Bharati May 2016 (PDF, 41 pages)
          </Text>

          <Text style={styles.descriptionContainer}>Matrimonial Initiative</Text>
          <Text>An effort by Dr. Ajay Pandey to provide BSNA families to introduce potential matrimonial matches.
            Our objective is to make the process easier and user friendly, whileaddressing privacy and security
            concerns. For additional questions about this initiative, please contact
            Dr. Ajay Pandey, Director of Matrimonial Services, at ajaykp@yahoo.com</Text>
          <Text style={styles.publicationText} onPress={() => this._handleLink("https://docs.google.com/forms/d/1FOryLetkadO7CgiSUfk-efP9K-SRzk-nUzVtQqRj0QE/viewform?edit_requested=true#responses")}>
            ∙ Matrimonial Form
          </Text>
          <Text style={styles.publicationText} onPress={() => this._handleLink("https://drive.google.com/open?id=10saLNE3HGaN_d3qTZrap_9OGQvoBxEaAwh4YOlQg9vI")}>
            ∙ Frequently Asked Questions
          </Text>


          <View style={{marginVertical: 15}}>
            <Button onPress={this._onDonate} title="Donate to BSNA" color="#841584" />
          </View>
        </View>
      </ScrollView>
    );
  }

  _handleLink = (link) => {
    Linking.openURL(link);
  };

  _onDonate = () => {
    Linking.openURL("https://www.paypal.com/donate/?token=AgqbNZ3NSDpm5nZ97HA23xP5iztjyi9Gyo3G1e0A8gWXV-Kj_cfRB8jYmBmjCaK6Z1Wd2G&country.x=US&locale.x=US");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  containerView: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  publicationText: {
    fontSize: 14,
    color: '#2e78b7',
    marginLeft: 20,
    padding: 10
  }
});
