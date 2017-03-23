'use strict';
var React = require('react-native');
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

var styles = React.StyleSheet.create({
 autocomplete: {
   position: 'relative',
},
field: {
  width:500
 },
list: {
  backgroundColor: '#FFF',
  padding: 15,
  position: 'absolute',
  top: 40,
  width:WIDTH,
  zIndex: 5,
},
item: {
  padding: 5,
}
});

module.exports = styles;
//  border: '1px solid #333',
//  borderRadius: '0',
//  boxShadow: 'none',
//  boxsizing: 'border-box',
//  height: '80px',
//  fontSize: '32px',
//  padding: '10px 15px',
//  width: '100%',


// .autocomplete {
//   position: relative;
//
//   &::before {
//     content: '\26B2';
//     color: #AAA;
//     font-size: 50px;
//     position: absolute;
//     right: 10px;
//     top: 10px;
//   }
//
//   .field {
//     border: 1px solid #333;
//     border-radius: 0;
//     box-shadow: none;
//     box-sizing: border-box;
//     height: 80px;
//     font-size: 32px;
//     padding: 10px 15px;
//     width: 100%;
//
//     &::-webkit-input-placeholder {
//       color: #333;
//     }
//
//     &::-moz-placeholder {
//       color: #333;
//     }
//
//
//   }
//
//   .list {
//     background-color: #FFF;
//     border: 1px solid #AAA;
//     border-top: none;
//     box-sizing: border-box;
//     height: auto;
//     padding: 10px 15px;
//     position: absolute;
//     top: 80px;
//     width: 100%;
//     z-index: 5;
//   }
// }
//
// .item {
//   padding: 5px 0;
//   font-size: 32px;
// }
//
// .item:hover {
//   background: #5A5;
// }
