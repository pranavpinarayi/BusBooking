import React, { PropTypes, Component } from 'react';
// import styles from './styles.scss';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const { string, func } = PropTypes;

class Header extends React.Component {
  static propTypes = {
    className: string,
  };
   render() {
     const {
       className
     } = this.props;
      return (
         <View className={className}>
            <Text>{this.props.children}</ Text>
         </View>
      );
   }
}

export default Header;
