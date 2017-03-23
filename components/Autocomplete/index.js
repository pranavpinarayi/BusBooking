import React, { PropTypes, Component } from 'react';
import styles from './styles.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView
} from 'react-native';

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
  };

  state = {
    showList: false,
    dataSource: ds.cloneWithRows(this.props.data),
  };

  onChange = (event) => {
    const { value } = event.target;

    //this.props.onChange(value);
    this.setState({
      showList: true,
    });
  };

  onSelect(item) {
    this.searchInput.value = item;
    this.props.onSelect(item);
    this.setState({
      showList: false,
    });
  };


  renderItem(item) {
    return (
      <View
        style={styles.item}
        onClick={() => this.onSelect(item)}
      >
        <Text>{item}</Text>
      </View>
    );
  }

  renderList() {
    const { dataSource, showList } = this.state;

    if (showList && dataSource && dataSource.getRowCount() > 0 ) {
      return (
        <ListView
          dataSource={dataSource}
          renderRow={(item) => this.renderItem(item)}
          style={styles.list}
        />
      );
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

    return (
      <View style={styles.autocomplete} >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.field}
            ref={(input) => { this.searchInput = input; }}
            disabled={disabled}
            placeholder={hintText}
            onChange={this.onChange}
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
