import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, Button, Alert, TextInput } from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import _ from 'underscore';

let addy = require('../../server/addy');



export default class pairingList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pairings = _.zip(this.props.pairs.finalRecipes, this.props.pairs.finalWines, this.props.pairs.finalBeers);
    console.log('pairings: ', pairings[0] ? pairings[0][0].image : 'null');
    return (
      <View style={styles.container}>
        <Card containerStyle={{padding: 0}} >
          {
            pairings.map((pair, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  avatar={{uri:pair[0].image}} />

              )
            })
          }
        </Card>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(176, 224, 230, .65)',

  },
})