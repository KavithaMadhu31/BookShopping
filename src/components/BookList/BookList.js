import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
const BookList = props => {
  // getting data from parent
  let item = props.item ? props.item : null;

  let title = item && item.title ? item.title : '';
  let author = item && item.author ? item.author : '';
  let createdAt = item && item.created_at ? item.created_at : '';

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleTxt}>{`${title}`}</Text>
          <Text style={styles.createdAt}>{`${createdAt}`}</Text>
        </View>
        <Text style={styles.authourTxt}>{`${author}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BookList;
