// react library imports
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View,RefreshControl} from 'react-native';
// component imports
import BookList from 'src/components/BookList/BookList';

// style imports
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {fetchBookList} from 'src/services/HomeServices';
const Home = () => {
  let data = useSelector(state => state.HomeReducers.data);
  const [currentPage, setCurrentPage] = useState(1);
  let dispatch = useDispatch();
  // call API
  useEffect(() => {
    getBookLists();
  }, []);

  // get books list from API
  async function getBookLists() {
    dispatch(fetchBookList(currentPage));
  }

  // child render item
  const childListRenderItem = ({item, index}) => <BookList item={item} />;

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.hits}
        renderItem={childListRenderItem}
        keyExtractor={childListKeyExtractor}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.state.isRefreshing}
        //     onRefresh={this.onRefresh}
        //     title="Loading..."
        //     titleColor={'red'}
        //     tintColor={'red'}
        //     colors={['red']}
        //   />
        // }
      />
    </View>
  );
};

export default Home;
