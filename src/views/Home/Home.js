// react library imports
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
} from 'react-native';
// component imports
import BookList from 'src/components/BookList/BookList';

// style imports
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {fetchBookList} from 'src/services/HomeServices';
import HomeSearch from 'src/components/HomeSearch/HomeSearch';
const Home = () => {
  let data = useSelector(state => state.HomeReducers.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksData, setBooksData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  let dispatch = useDispatch();
  // call API
  useEffect(() => {
    dispatch(fetchBookList(currentPage));
    // // Call api in every 3 second
    // let apiInterval = setInterval(() => {
    //   console.log('current value', currentPage);
    //   dispatch(fetchBookList(currentPage));
    //   setCurrentPage(currentPage + 1);
    // }, 3000);
    // // clear interval ..
    // return () => clearInterval(apiInterval);
  }, []);
  useEffect(() => {
    setBooksData(data.hits);
  }, [data]);

  const handleSearchValue = text => {
    setSearchValue(text);
    if (text.length == 0) {
      setBooksData(data.hits);
    }
  };
  //filter title or author matches with search value
  const handleSearch = () => {
    if (searchValue.length != 0) {
      let filteredValue = data.hits.filter(
        data =>
          data.title.toLowerCase() == searchValue.toLowerCase() ||
          data.author.toLowerCase() == searchValue.toLowerCase(),
      );
      setBooksData(filteredValue);
    }
  };
  // sort item in ascending order
  const handleFilterDataAsc = () => {
    let filteredValue = data.hits.sort(function (a, b) {
      var c = new Date(a.created_at);
      var d = new Date(b.created_at);
      return c - d;
    });
    console.log('the filteredValue', filteredValue);
    setBooksData(filteredValue);
  };
  // sort item in descending order
  const handleFilterDataDesc = () => {
    let filteredValue = data.hits.sort(function (a, b) {
      var c = new Date(a.created_at);
      var d = new Date(b.created_at);
      return c + d;
    });
    console.log('the filteredValue', filteredValue);
    setBooksData(filteredValue);
  };
  // child render item
  const childListRenderItem = ({item, index}) => <BookList item={item} />;

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <HomeSearch
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
            handleSearch={handleSearch}
            handleFilterDataAsc={handleFilterDataAsc}
            handleFilterDataDesc={handleFilterDataDesc}
          />

          <FlatList
            data={booksData}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
            showsVerticalScrollIndicator={false}
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
      </SafeAreaView>
    </>
  );
};

export default Home;
