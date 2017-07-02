import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }
  render() {
    return (
      <Image source={require('../images/table.jpg')} style={styles.container}>
        <View>
          <Text style={styles.title}>🍷🍅🍉🍊🍌🍍🍺🍲🍦</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          placeholder="Search here!"
          onChangeText={(item) => this.setState({item})}
        />
        </View>
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 40
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: 'rgba(215, 217, 221, .85)',
  },
  title: {
    fontSize: 38,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: null,
    width: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
    padding: 10
  }
});
