import {combineReducers} from 'redux';

import config from 'reducers/config';
import adoptions from 'reducers/adoptions';

const reducers = {
  config,
  adoptions
};

export default combineReducers(reducers);
