import {GET_URL} from './Constants';
import {
  getBookLists,
  getBooksListSuccess,
  getBooksListFailure,
} from 'src/actions/HomeActions';

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
