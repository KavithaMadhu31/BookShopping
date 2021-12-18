import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
const HomeSearch = props => {
  return (
    <View>
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
      <View style={styles.filterView}>
        <Text style={styles.filterTxt}>Filter by</Text>
        <TouchableOpacity onPress={props.handleFilterDataAsc}>
          <Text style={styles.filerByASC}>ASC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.handleFilterDataDesc}>
          <Text style={styles.filerByASC}>DESC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeSearch;
