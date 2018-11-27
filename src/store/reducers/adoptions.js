export const ADOPTIONS_REQUEST = 'adoptions/ADOPTIONS_REQUEST';
export const ADOPTIONS_SUCCESS = 'adoptions/ADOPTIONS_SUCCESS';
export const ADOPTIONS_FAIL = 'adoptions/ADOPTIONS_FAIL';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADOPTIONS_REQUEST:
      return state;
    case ADOPTIONS_SUCCESS:
      return {
        ...state,
        ...initialState
      };
    case ADOPTIONS_FAIL:
      return state;
    default:
      return state;
  }
};