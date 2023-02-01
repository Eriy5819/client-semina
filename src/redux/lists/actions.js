import {
  START_FETCHING_LIST_CATEGORIES,
  SUCCESS_FETCHING_LIST_CATEGORIES,
  ERROR_FETCHING_LIST_CATEGORIES,
  START_FETCHING_LIST_TALENTS,
  SUCCESS_FETCHING_LIST_TALENTS,
  ERROR_FETCHING_LIST_TALENTS,
  START_FETCHING_LIST_EVENTS,
  SUCCESS_FETCHING_LIST_EVENTS,
  ERROR_FETCHING_LIST_EVENTS,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';

let debounceFetchListCategories = debounce(getData, 1000);
let debounceFetchListTalents = debounce(getData, 1000);
let debounceFetchListEvents = debounce(getData, 1000);

export const startFetchingListCategories = () => {
  return {
    type: START_FETCHING_LIST_CATEGORIES,
  };
};

export const successFetchingListCategories = ({ categories }) => {
  return {
    type: SUCCESS_FETCHING_LIST_CATEGORIES,
    categories,
  };
};

export const errorFetchingListCategories = () => {
  return {
    type: ERROR_FETCHING_LIST_CATEGORIES,
  };
};

export const fetchListCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingListCategories());
    try {
      let res = await debounceFetchListCategories('/cms/categories');

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res._id,
          label: res.name,
          target: { value: res._id, name: 'category' },
        });
      });

      dispatch(
        successFetchingListCategories({
          categories: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListCategories());
    }
  };
};

// talents

export const startFetchingListTalents = () => {
  return {
    type: START_FETCHING_LIST_TALENTS,
  };
};

export const successFetchingListTalents = ({ talents }) => {
  return {
    type: SUCCESS_FETCHING_LIST_TALENTS,
    talents,
  };
};

export const errorFetchingListTalents = () => {
  return {
    type: ERROR_FETCHING_LIST_TALENTS,
  };
};

export const fetchListTalents = () => {
  return async (dispatch) => {
    dispatch(startFetchingListTalents());

    try {
      let res = await debounceFetchListTalents('/cms/talents');

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res._id,
          label: res.name,
          target: { value: res._id, name: 'talent' },
        });
      });

      dispatch(
        successFetchingListTalents({
          talents: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListTalents());
    }
  };
};

// events

export const startFetchingListEvents = () => {
  return {
    type: START_FETCHING_LIST_EVENTS,
  };
};

export const successFetchingListEvents = ({ events }) => {
  return {
    type: SUCCESS_FETCHING_LIST_EVENTS,
    events,
  };
};

export const errorFetchingListEvents = () => {
  return {
    type: ERROR_FETCHING_LIST_EVENTS,
  };
};

export const fetchListEvents = () => {
  return async (dispatch) => {
    dispatch(startFetchingListEvents());

    try {
      let res = await debounceFetchListEvents('/cms/events');

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res._id,
          label: res.tittle,
          target: { value: res._id, name: 'event' },
        });
      });

      dispatch(
        successFetchingListEvents({
          events: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListEvents());
    }
  };
};
