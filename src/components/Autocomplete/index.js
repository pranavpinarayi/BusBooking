import React, { PropTypes, Component } from 'react';
import styles from './styles.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  TouchableHighlight,
  Button
} from 'react-native';

import { incrementValue } from '../../redux/modules/test/action';

const { string, func } = PropTypes;
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Autocomplete extends Component {
  static propTypes = {
    data: PropTypes.array,
    query: string,
    hintText: string,
    onSelect: func,
    onChange: func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onChange: null,
    onSelect: null,
    data: [],
  };

  state = {
    showList: false,
    dataSource: ds.cloneWithRows(this.props.data),
  };

  componentWillReceiveProps({ data }) {
    const dataSource = this.state.dataSource.cloneWithRows(data);
    this.setState({ dataSource });
  }

  onChange = (inputValue) => {
    const value = inputValue;
    this.props.onChange(value);
    this.setState({
      showList: true,
    });
  };

  onSelect(item) {
    this.searchInput.setNativeProps({text: item});
    this.setState({
      showList: false,
    });
  };

  onPress() {
    console.log('clicked');
  }


  renderItem(item) {
    console.log('item', item);
    return (
      <TouchableHighlight
        style={styles.item}
        onPress={() => this.onSelect(item)}
      >
        <Text>{item}</Text>
      </TouchableHighlight>
    );
  }

  renderList() {
    const { dataSource, showList } = this.state;

    if (showList && dataSource && dataSource.getRowCount() > 0 ) {
      return (
        <ListView
          contentContainerStyle={styles.listContainer}
          dataSource={dataSource}
          renderRow={(item) => this.renderItem(item)}
          style={styles.list}
        />);
    }
    return null;
  }

  render() {
    const {
      hintText,
      query,
      disabled,
      className,
    } = this.props;

    console.log(this.props);
    return (
      <View style={styles.autocomplete} >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.field}
            ref={(input) => { this.searchInput = input; }}
            disabled={disabled}
            placeholder={hintText}
            onChangeText={value => this.onChange(value)}
            value={query}
            underlineColorAndroid='transparent'
          />
        </View>
        <View>
          {this.renderList()}
        </View>
      </View>
    );
  }
}

export default Autocomplete;
