/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import BusSearch from './src/pages/BusSearch';
 import BusList from './src/pages/BusList';
 import { Provider } from 'react-redux';
 import {
   AppRegistry,
   StyleSheet,
   Navigator,
   TouchableHighlight,
   Text
 } from 'react-native';
  import { StackNavigator } from 'react-navigation';

 import { createStore } from 'redux'
 import busReducer from './src/redux/modules/test/reducer'

 let store = createStore(busReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 let busArray = [
           {
             'no':'RAC122',
             'arrival':'11.30',
             'depart':'2:00'
           },
           {
             'no':'TVP122',
             'arrival':'12.30',
             'depart':'2:45'
           },
           {
             'no':'RAC322',
             'arrival':'2.30',
             'depart':'12:00'
           }

 ]
export default class Bus extends Component {
  renderScene = (props, navigator)  => { // if NavigationCardStack
    switch (props.index) {
      case 0:
        return <BusSearch navigator={navigator}/>
        break;
      case 1:
        return <BusList data={busArray} navigator={navigator}/>
        break;
      default:
        return <BusSearch navigator={navigator}/>
        break;
    }
  };
  render() {
    const routes = [
    {title: 'Search', index: 0},
    {title: 'Second Scene', index: 1},
  ];
    return (
      <Provider key="provider" store={store}>
        <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Bus', () => Bus);
