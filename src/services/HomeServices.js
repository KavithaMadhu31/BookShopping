import {GET_URL} from './Constants';

export async function useFetchBookAPI(pageNo) {
  const url = GET_URL.BOOK_URL + `${pageNo}`;
  console.log('the url is', url);
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.hits;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
