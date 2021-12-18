import {GET_URL} from './Constants';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from 'src/actions/ActionConstants';
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

export function fetchBookList(pageNo) {
  const url = GET_URL.BOOK_URL + `${pageNo}`;
  return dispatch => {
    dispatch(getBookLists());

    return fetch(url)
      .then(res => res.json())
      .then(json => {
        return dispatch(getBooksListSuccess(json));
      })
      .catch(err => dispatch(getBooksListFailure(err)));
  };
}

function getBookLists() {
  return {
    type: FETCHING_DATA,
  };
}

function getBooksListSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

function getBooksListFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}
