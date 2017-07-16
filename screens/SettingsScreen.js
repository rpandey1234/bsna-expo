import React from 'react';
import { Dimensions, Linking, Picker, ScrollView, StyleSheet, Text, View } from 'react-native';
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

export class ChapterInfo extends React.Component {
  render() {
    var officer = this.props.officer;
    if (!officer) return null;
    return (
        <View style={styles.tableRow}>
          <Text style={{fontWeight: 'bold'}}>President: {officer.name}</Text>
          <Text>Location: {officer.city}</Text>
          <Text style={{color: '#2e78b7'}} onPress={() => this._handleEmailPress("mailto:" + officer.email)}>{officer.email}</Text>
          <Text onPress={() => Linking.openURL("tel:" + officer.phone)}>{officer.phone}</Text>
        </View>
    )
  }
}

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact info',
  };

  constructor() {
    super();
    this.state =  {
      officers: [],
      location: 'mi',
    }
  }

  componentDidMount() {
    this.setState({
      officers: Officers.officers,
    });
  }

  render() {
    const chapterLookup = {
      casf: {
        name: "Mr. Shailendra Tiwari",
        city: "Bay Area",
        email: "shailee.2807@gmail.com",
        phone: "408-775-3784",
      },
      casd: {
        name: "Dr. Sanjay K Pandey",
        city: "San Diego",
        email: "sanjaypan@msn.com",
        phone: "760-632-1673",
      },
      casac: {
        name: "Mr. Vinod Sharma",
        city: "Sacramento",
        email: "miratti@aol.com",
        phone: "916-769-7392",
      },
      cala: {
        name: "Mr. Gopal Chaturvedi",
        city: "Los Angeles",
        email: "chatur90@aol.com",
        phone: "951-217-8170",
      },
      co: {
        name: "Ms. Vibha Tripathi",
        city: "Denver/Arora",
        email: "vibha.sharma@ucdenver.edu",
        phone: "303-400-9570",
      },
      ill: {
        name: "Mr. Sohan Joshi",
        city: "Chicago",
        email: "sohanjoshi6357@gmail.com",
        phone: "773-805-4357",
      },
      indiana: {
        name: "Dr. Mahesh Jha",
        city: "Indianapolis",
        email: "drsjha@earthlink.net",
        phone: "317-578-1561",
      },
      la: {
        name: "Dr. Madhurendu Kumar",
        city: "Baton Rouge",
        email: "mb_kumar@yahoo.com",
        phone: "225-769-2765",
      },
      ma: {
        name: "Mr. Rajesh Dubey",
        city: "Boston",
        email: "rajdubey7@yahoo.com",
        phone: "716-908-8136",
      },
      mn: {
        name: "Mr. Satyendra Chaturvedi",
        city: "Minneapolis",
        email: "Essenco@yahoo.com",
        phone: "763-566-3103",
      },
      mi: {
        name: "Dr. Ajay Pandey",
        city: "Rochester Hills",
        email: "ajaykp@yahoo.com",
        phone: "248-656-4144",
      },
      ms: {
        name: "Dr. Manoj Shukla",
        city: "Clinton",
        email: "mshukla@icnanotox.org",
        phone: "601-291-0678",
      },
      mo: {
        name: "Dr. Shivendra/Asha Shukla",
        city: "Columbia",
        email: "shuklasd@missouri.edu",
        phone: "573-449-5608",
      },
      ny: {
        name: "Dr. Amarnath Jha 'Bakshi'",
        city: "Albany",
        email: "jhaamar@yahoo.com",
        phone: "480-435-3330",
      },
      nyc: {
        name: "Mr. Aseem Trivedi",
        city: "New York",
        email: "aseemctrivedi@gmail.com",
        phone: "315-806-2920",
      },
      oh: {
        name: "Dr. Raj K. Tripathi",
        city: "Cambridge",
        email: "rajtripathi@yahoo.com",
        phone: "614-432-2746",
      },
      ontario: {
        name: "Mr. Anil Sharma",
        city: "Toronto",
        email: "Anily2k@hotmail.com",
        phone: "905-487-2645",
      },
      penn: {
        name: "Mrs. Vimlesh Misra",
        city: "Pennsylvania",
        email: "Vmisra42@gmail.com",
        phone: "610-539-6073",
      },
      quebec: {
        name: "Dr. UmaNath Tiwari",
        city: "Dollard-Des Ormeaux (Quebec)",
        email: "untiwari@yahoo.com",
        phone: "514-683-4954",
      },
      dallas: {
        name: "Mr. Shri Gaur",
        city: "Dallas",
        email: "Shrig.sewa@gmail.com",
        phone: "214-727-7200",
      },
      houston: {
        name: "Mrs. Abha Dwivedi",
        city: "Houston",
        email: "Agla.abha@gmail.com",
        phone: "281-650-3229",
      },
      va: {
        name: "Mr. Ashok Sawaswat",
        city: "D.C. area",
        email: "Ashok_saraswat@hotmail.com",
        phone: "909-437-3647",
      },
      wa: {
        name: "Mr. Om Dwivedi",
        city: "Seattle",
        email: "omk6720@hotmail.com",
        phone: "206-498-8520",
      },
      dc: {
        name: "Mr. Ashok Sharma",
        city: "Bowie, Maryland",
        email: "sumansharma@gmail.com",
        phone: "301-809-6948",
      },
    };
    return (
      <ScrollView style={styles.container}>

        <Text style={styles.headerText}>Find your BSNA chapter</Text>
        <Picker
            style={{marginHorizontal: 30}}
            selectedValue={this.state.location}
            onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
          <Picker.Item label="California (Bay Area)" value="casf" />
          <Picker.Item label="California (San Diego)" value="casd" />
          <Picker.Item label="California (Sacramento)" value="casac" />
          <Picker.Item label="California (Los Angeles)" value="cala" />
          <Picker.Item label="Colorado" value="co" />
          <Picker.Item label="Illinois" value="ill" />
          <Picker.Item label="Indiana" value="indiana" />
          <Picker.Item label="Louisiana" value="la" />
          <Picker.Item label="Massachusetts" value="ma" />
          <Picker.Item label="Minnesota" value="mn" />
          <Picker.Item label="Michigan" value="mi" />
          <Picker.Item label="Mississippi" value="ms" />
          <Picker.Item label="Missouri" value="mo" />
          <Picker.Item label="New York (Albany)" value="ny" />
          <Picker.Item label="New York (City)" value="nyc" />
          <Picker.Item label="Ohio" value="oh" />
          <Picker.Item label="Ontario (Southern)" value="ontario" />
          <Picker.Item label="Pennsylvania (Eastern)" value="penn" />
          <Picker.Item label="Quebec" value="quebec" />
          <Picker.Item label="Texas (Dallas)" value="dallas" />
          <Picker.Item label="Texas (Houston)" value="houston" />
          <Picker.Item label="Virginia" value="va" />
          <Picker.Item label="Washington" value="wa" />
          <Picker.Item label="Washington, DC" value="dc" />
        </Picker>
        <ChapterInfo officer={chapterLookup[this.state.location]}/>

        <View
            style={{
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                width: Dimensions.get('window').width,
                marginTop: 10
              }}
            />

        <Text style={styles.headerText}>Executive Committee (EC) for 2016 - 2018 Term</Text>
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
  headerText: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tableRow: {
    marginVertical: 10,
    marginHorizontal: 20,
  }
});
