import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import categoriesReducer from './categories/reducer';
import notifReducer from './notif/reducer';
import talentReducer from './talents/reducer';
import paymentsReducer from './payments/reducer';
import eventsReducer from './events/reducer';
import listsReducer from './lists/reducer';
import ordersReducer from './orders/reducers';
import organizersReducer from './organizers/reducer'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  talents: talentReducer,
  payments: paymentsReducer,
  events: eventsReducer,
  lists: listsReducer,
  orders: ordersReducer,
  organizers: organizersReducer
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
