import React, { PropTypes, Component } from 'react';
import styles from './styles.js';
import {
  Text,
  View,
  Button
} from 'react-native';

const { string, func } = PropTypes;

class BusList extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [],
  };

  renderItem(item, index) {
    return (
      <View style={styles.listRow} key={index}>
        <View style={styles.listItem}><Text>{item.no}</Text></View>
        <View style={styles.listItem}><Text>{item.arrival}</Text></View>
        <View style={styles.listItem}><Text>{item.depart}</Text></View>
        <View style={styles.listItem}>
          <Button onPress={()=>{console.log('book');}}
            title="Book"
            color="#841584"/>
        </View>
      </View>
    );
  }

  renderList() {
    const {
      data,
    } = this.props;

    if ( data && data.length > 0) {
      return (
        <View style={styles.busList}>
          <View style={styles.listRow}>
            <View style={styles.listItem}>
              <Text style={styles.listItemHead}>No</Text>
            </ View>
            <View style={styles.listItem}>
              <Text style={styles.listItemHead}>Arrival</Text>
            </ View>
            <View style={styles.listItem}>
              <Text style={styles.listItemHead}>Departure</Text>
            </ View>
            <View style={styles.listItem}></ View>
          </View>
          { data.map((item, index) => this.renderItem(item, index)) }
        </View>
      );
    }

    return null;
  }

  render() {
    return (
      <View style={styles.page} >
        {this.renderList()}
      </View>
    );
  }
}

export default BusList;
