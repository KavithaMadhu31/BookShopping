// react library imports
import React, {useEffect, useState, useRef} from 'react';
import {FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
// component imports
import BookList from 'src/components/BookList/BookList';
import HomeSearch from 'src/components/HomeSearch/HomeSearch';
// style imports
import styles from './styles';
import {ColourPalette} from 'src/styles/ColourPalette';
// services imports
import {useDispatch, useSelector} from 'react-redux';
import {fetchBookList} from 'src/services/HomeServices';

const Home = () => {
  let data = useSelector(state => state.HomeReducers.data);

  const [booksData, setBooksData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const currentPage = useRef(1);

  let dispatch = useDispatch();

  useEffect(() => {
    // Call api in every 3 second 

    let apiInterval = setInterval(() => {
      getBookList(currentPage.current);
      currentPage.current = currentPage.current + 1;
    }, 3000);
    // clear interval ..
    return () => clearInterval(apiInterval);
  }, []);
  useEffect(() => {
    if (data.hits != undefined) {
      setBooksData(booksData.concat(data.hits));
    }
  }, [data]);
  const getBookList = pageCount => {
    dispatch(fetchBookList(pageCount));
  };
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

    setBooksData(filteredValue);
  };
  // sort item in descending order
  const handleFilterDataDesc = () => {
    let filteredValue = data.hits.sort(function (a, b) {
      var c = new Date(a.created_at);
      var d = new Date(b.created_at);
      return c + d;
    });
    setBooksData(filteredValue);
  };
  // pull to refresh
  const handleRefresh = () => {
    getBookList(currentPage.current);
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
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={handleRefresh}
                title="Loading..."
                titleColor={ColourPalette.textPrimary}
                tintColor={ColourPalette.textPrimary}
                colors={[ColourPalette.textPrimary]}
              />
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
