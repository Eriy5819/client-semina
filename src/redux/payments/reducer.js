import {
  START_FETCHING_PAYMENTS,
  SUCCESS_FETCHING_PAYMENTS,
  ERROR_FETCHING_PAYMENTS,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const intialState = {
  data: [],
  keyword: '',
  status: statuslist.idle,
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case START_FETCHING_PAYMENTS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_PAYMENTS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_PAYMENTS:
      return {
        ...state,
        status: statuslist.success,
        data: action.payments,
      };

    default:
      return state;
  }
}
