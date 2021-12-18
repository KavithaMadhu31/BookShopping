import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from './ActionConstants';

export const getBookLists = () => {
  return {
    type: FETCHING_DATA,
  };
};

export const getBooksListSuccess = data => {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
};

export const getBooksListFailure = () => {
  return {
    type: FETCHING_DATA_FAILURE,
  };
};
