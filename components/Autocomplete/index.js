import React, { PropTypes, Component } from 'react';
import styles from './styles.js';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Container, Content, Form, Item, Input, Icon, Card, ListItem } from 'native-base';

const { string, func } = PropTypes;

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
  };

  onChange = (event) => {
    const value = event;

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


  renderItem(item, index) {
    return (
      <Container
        style={styles.item}
        key={index}
        onClick={() => this.onSelect(item)}
      >
        <ListItem><Text>{item}</Text></ListItem>
      </Container>
    );
  }

  renderList() {
    const {
      data,
    } = this.props;

    if (this.state.showList && data && data.length > 0) {
      return (
        <Container>
          { data.map((item, index) => this.renderItem(item, index)) }
        </Container>
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
      <Container>
        <Content>
          <Card>
          <Item regular>
             <Input
              placeholder={hintText}
              onChangeText={this.onChange}
              value={query}
            />
         </Item>
          {this.renderList()}
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Autocomplete;
