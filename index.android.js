/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import Autocomplete from './components/Autocomplete';
 import {
   AppRegistry,
   StyleSheet,
   View
 } from 'react-native';
 import { Container, Content, Card, CardItem, Body, Text, Button, Header, Title, Subtitle, Left, Right, Icon } from 'native-base';

export default class Bus extends Component {
  filteredList = ['aa', 'bb', 'cc', 'dd', 'aab', 'aac', 'bbd'];
  onSelect = (value) => {
    console.log(`${value} selected`);
  };

  onChange = (value) => {
    this.setState({filteredList: this.location.filter((listItem) => listItem.includes(value))});
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
              <Title>Seach</Title>
              <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />
      </Header>
        <Autocomplete
         data={this.filteredList}
         hintText={'From'}
         onChange={this.onChange}
         onSelect={this.onSelect}
        />
        <Autocomplete
         data={this.filteredList}
         hintText={'To'}
         onChange={this.onChange}
         onSelect={this.onSelect}
        />
        <Button block>
          <Text>Search </Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Bus', () => Bus);
