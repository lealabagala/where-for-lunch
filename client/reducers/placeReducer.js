import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [actionTypes.REMOVE_DETAILS]() {
      return initialState;
    },
    [actionTypes.FETCH_PLACE_DETAILS](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actionTypes.FETCH_PLACE_DETAILS_SUCCESS](state, action) {
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    },
    [actionTypes.FETCH_PLACE_DETAILS_FAIL](state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
  initialState,
);

export default placeReducer;
