import React from 'react';
import { Button, Dimensions, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, WebView } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Documents and Links'
  };

  render() {
    const uri = 'http://www.bsna.org/paypal_payment_sponsorship_donation_2.html';
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


          <View style={{marginVertical: 15, paddingVertical: 10, borderTopWidth: StyleSheet.hairlineWidth}}>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>Make a voluntary donation to BSNA with Paypal:</Text>
            <WebView
                ref={(ref) => { this.webview = ref; }}
                source={{uri}}
                style={{width: Dimensions.get('window').width, height: 200}}
                onNavigationStateChange={(event) => {
                  if (event.url !== uri) {
                    Linking.openURL(event.url);
                  }
                }}
                />
          </View>
        </View>
      </ScrollView>
    );
  }

  _handleLink = (link) => {
    Linking.openURL(link);
  };
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
