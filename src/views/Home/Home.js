// react library imports
import React, {useEffect, useState, useContext} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
// component imports
import BookList from 'src/components/BookList/BookList';
// API imports
import {useFetchBookAPI} from 'src/services/HomeServices';
// style imports
import styles from './styles';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [booksData, setbooksData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // call API
  useEffect(() => {
    getBookLists();
  }, []);

  // get books list from API
  async function getBookLists() {
    let data = await useFetchBookAPI(currentPage);

    setbooksData(data);

    setIsLoading(false);
  }

  // child render item
  const childListRenderItem = ({item, index}) => <BookList item={item} />;

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <FlatList
        data={booksData}
        renderItem={childListRenderItem}
        keyExtractor={childListKeyExtractor}
      />
    </View>
  );
};

export default Home;
