import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Autocomplete from '../../components/Autocomplete'
import { loadLocation } from '../../redux/modules/BusSearch/action';
// import styles from './styles.scss';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const { string, func } = PropTypes;

@connect(state => ({
  value: state.data,
}),
{
  loadLoc:loadLocation,
})
class BusSearch extends React.Component {
  static navigationOptions = {
    title: 'Bus Search',
  };

  filteredList = ['aa', 'bb', 'cc', 'dd', 'aab', 'aac', 'bbd'];
  onSelect = (value) => {
    console.log(`${value} selected`);
  };

  onChange = (value) => {
    this.props.loadLoc();
    this.setState({filteredList: this.filteredList.filter((listItem) => listItem.includes(value))});
  };

  next = () => {
    this.props.navigator.push({title: 'Second Scene', index: 1});
    console.log('next');
  }

  state = {
    filteredList: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <Autocomplete
         data={this.props.value}
         hintText={'From'}
         onChange={this.onChange}
         onSelect={this.onSelect}
        />
        <Autocomplete
         data={this.props.value}
         hintText={'From'}
         onChange={this.onChange}
         onSelect={this.onSelect}
        />
        <Button
          onPress={this.next}
          title="Search"
          color="#841584"
          style={styles.button}
        />
      </View>
    );
  }
}

const Bus = StackNavigator({
  search: { screen: BusSearch },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
    backgroundColor: '#E0FFFF',
    flexDirection: 'column'
  },
  button: {
    flex:1,
  }
});


export default BusSearch;
