import React, { PropTypes, Component } from 'react';
import styles from './styles.js';
import {
  Text,
  View,
  Button
} from 'react-native';

const { string, func } = PropTypes;

class ResultList extends Component {
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
          <Button onPress={null}
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
            <View style={styles.listItemHead}><Text>No</Text></ View>
            <View style={styles.listItemHead}><Text>Arrival</Text></ View>
            <View style={styles.listItemHead}><Text>Departure</Text></ View>
            <View style={styles.listItemHead}></ View>
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

export default ResultList;
