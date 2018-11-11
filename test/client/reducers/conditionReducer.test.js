import reducer from '../../../client/reducers/conditionReducer';
import * as actions from '../../../client/actions/conditionActionTypes';

describe('conditionReducer', () => {
  const testState = {
    radius: '500',
  };

  test('SET_RADIUS updates the radius value in the store', () => {
    const action = {
      type: actions.SET_RADIUS,
      payload: '1000',
    };
    expect(reducer(testState, action)).toEqual({ radius: '1000' });
  });

  test('SET_LAT_LANG updates the latitude and longitude values in the store', () => {
    const action = {
      type: actions.SET_LAT_LNG,
      payload: {
        latitude: 3.5,
        longitude: 4.1,
      },
    };
    expect(reducer(testState, action)).toEqual({ radius: '500', latitude: 3.5, longitude: 4.1 });
  });

  test('ADD_PRICE adds a price value in the price array', () => {
    testState.price = [];
    const action = {
      type: actions.ADD_PRICE,
      payload: '2',
    };
    expect(reducer(testState, action)).toEqual({ radius: '500', price: ['2'] });
  });

  test('REMOVE_PRICE removes a price value in the price array', () => {
    testState.price = ['1', '3'];
    const action = {
      type: actions.REMOVE_PRICE,
      payload: '3',
    };
    expect(reducer(testState, action)).toEqual({ radius: '500', price: ['1'] });
  });

});