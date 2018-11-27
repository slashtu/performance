
import {createStore as baseCreateStore} from 'redux';
import reducers from 'reducers/reducers';

export const createStore = (initialState = {}) => {
  const store = baseCreateStore(reducers, initialState);
  return store;
};
