import {
  START_FETCHING_CATEGORIES,
  SUCCESS_FETCHING_CATEGORIES,
  ERROR_FETCHING_CATEGORIES,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';

let debounceFetchCategories = debounce(getData, 1000);

// START
export const startFetchingCategories = () => {
  return {
    type: START_FETCHING_CATEGORIES,
  };
};

// SUCCESS
export const successFetchingCategories = ({ categories }) => {
  return {
    type: SUCCESS_FETCHING_CATEGORIES,
    categories,
  };
};

// ERROR
export const errorFetchingCategories = () => {
  return {
    type: ERROR_FETCHING_CATEGORIES,
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingCategories());

    try {
      /* setTimeout(() => {
            dispatch()
        }, 3000); */

      let res = await debounceFetchCategories('/cms/categories');

      dispatch(
        successFetchingCategories({
          categories: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingCategories());
    }
  };
};