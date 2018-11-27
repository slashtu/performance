export const ENABLE_DATAFETCH = 'config/ENABLE_DATAFETCH';

const initialState = {
  isDataFetchEnabled: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_DATAFETCH:
      return {
        ...state,
        isDataFetchEnabled: true
      };b
    default:
      return state;
  }
};