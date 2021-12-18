import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
const HomeSearch = props => {
  

  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.searchTxt}
        value={props.searchValue}
        onChangeText={props.handleSearchValue}
        placeholder={'Search by title, author..'}
      />
      <TouchableOpacity onPress={props.handleSearch}>
        <Text style={styles.searchBtn}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSearch;
