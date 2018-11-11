import { handleActions } from 'redux-actions';
import { removePrice } from 'lib/utils';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  price: [],
};
const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
    [actionTypes.ADD_PRICE](state, action) {
      return {
        ...state,
        price: [...state.price, action.payload],
      };
    },
    [actionTypes.REMOVE_PRICE](state, action) {
      return {
        ...state,
        price: removePrice(state.price, action.payload),
      };
    },
  },
  initialState,
);

export default conditionReducer;
