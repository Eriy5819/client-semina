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

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'proccess',
  error: 'error',
};

const initialState = {
  categories: [],
  statusCategories: statuslist.idle,
  talents: [],
  statusTalents: statuslist.idle,
  events: [],
  statusEvents: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_LIST_CATEGORIES:
      return { ...state, statusCategories: statuslist.process };

    case ERROR_FETCHING_LIST_CATEGORIES:
      return { ...state, statusCategories: statuslist.error };

    case SUCCESS_FETCHING_LIST_CATEGORIES:
      return {
        ...state,
        statusCategories: statuslist.success,
        categories: action.categories,
      };

    case START_FETCHING_LIST_TALENTS:
      return { ...state, statusTalents: statuslist.process };

    case ERROR_FETCHING_LIST_TALENTS:
      return { ...state, statusTalents: statuslist.error };

    case SUCCESS_FETCHING_LIST_TALENTS:
      return {
        ...state,
        statusTalents: statuslist.success,
        talents: action.talents,
      };

    case START_FETCHING_LIST_EVENTS:
      return { ...state, statusEvents: statuslist.process };

    case ERROR_FETCHING_LIST_EVENTS:
      return { ...state, statusEvents: statuslist.error };

    case SUCCESS_FETCHING_LIST_EVENTS:
      return {
        ...state,
        statusEvents: statuslist.success,
        events: action.events,
      };

    default:
      return state;
  }
}
