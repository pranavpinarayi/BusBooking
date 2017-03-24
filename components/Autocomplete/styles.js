'use strict';
var React = require('react-native');
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const border = {
  borderColor: '#b9b9b9',
  borderRadius: 1,
  borderWidth: 1
};

var styles = React.StyleSheet.create({
 autocomplete: {
   top: 0,
   flex: 1,
},
field: {
  flex: 1,
  fontSize: 12,
  backgroundColor: '#FFF',
  alignSelf: 'stretch',
  color: '#000'
 },
list: {
  backgroundColor: 'white',
  borderTopWidth: 0,
  left: 0,
  top: 0,
  position: 'absolute',
  right: 0,
  zIndex: 999990,
  shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
},
item: {
  padding: 5,
},
inputContainer: {
  ...border,
  marginBottom: 0,
  height: 40,
},
});

module.exports = styles;
