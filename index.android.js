/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import BusSearch from './src/pages/BusSearch';
 import { Provider } from 'react-redux';
 import {
   AppRegistry,
   StyleSheet,
 } from 'react-native';
  import { StackNavigator } from 'react-navigation';

 import { createStore } from 'redux'
 import busReducer from './src/redux/modules/test/reducer'

 let store = createStore(busReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Bus extends Component {
  render() {
    return (
      <Provider key="provider" store={store}>
        <BusSearch />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Bus', () => Bus);
