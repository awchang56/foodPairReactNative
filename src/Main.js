import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';
import axios from 'axios';

import PairingList from './components/pairingList.js';
let addy = require('../server/addy');
// let mainHelpers = require('./helpers/mainHelpers');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      pairs: {
        finalRecipes: [],
        finalWines: [],
        finalBeers: []
      }
    };
  }

  setPairings(data) {
    this.setState({
      pairs: data
    });
  }

  render() {
    return (
      <Image source={require('../images/table.jpg')} style={styles.container}>
        <View style={styles.titleFormat}>
          <Text style={styles.title}>🍷🍅🍉🍊🍌🍍🍺🍲🍦</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          placeholder="Search here!"
          onChangeText={(item) => this.setState({item})}
          onSubmitEditing={() =>
            {
              let passPref;
              // prefHelper.preferences(this.state.prefer);
              return axios.post(addy.serverAddress + "/search", {
                  item: this.state.item,
                  choices: null
                })
                .then((result) => {
                  console.log('result: ', result.data);
                  return this.setPairings(result.data);
                })
              .catch(err => console.log('error: ', err))
            }
          }/>
        </View>
        <PairingList style={styles.pairingList} pairs={this.state.pairs} />

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: null,
    width: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
    padding: 10
  },
  titleFormat: {
    // flex: 1
  },
  title: {
    fontSize: 38,
  },
  inputContainer: {
    // flex: 1,
    height: 40
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: 'rgba(215, 217, 221, .85)',
  },
  pairingList: {
    // flex: 3,
    padding: 10,

  },
});
