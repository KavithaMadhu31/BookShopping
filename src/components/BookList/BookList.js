import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
const BookList = props => {
  // getting data from parent
  let item = props.item ? props.item : null;

  let title = item && item.title ? item.title : '';
  let author = item && item.author ? item.author : '';
  console.log('props', title);
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => props.showPopup(item)}>
      <View style={styles.nameView}>
        <Text style={styles.name}>{`${title} ${author}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookList;
