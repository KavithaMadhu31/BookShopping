import {GET_URL} from './Constants';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from 'src/actions/ActionConstants';

export const fetchBookList = pageNo => {
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
};

const getBookLists = () => {
  return {
    type: FETCHING_DATA,
  };
};

const getBooksListSuccess = data => {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
};

const getBooksListFailure = () => {
  return {
    type: FETCHING_DATA_FAILURE,
  };
};
