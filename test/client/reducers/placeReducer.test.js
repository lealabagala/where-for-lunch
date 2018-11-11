import reducer from '../../../client/reducers/placeReducer';
import * as actions from '../../../client/actions/placeActionTypes';

describe('placeReducer', () => {
  const testState = {
  };
  const details = {  
    rating: 3.5,
    price: '₱₱₱',
    phone: '+63822980168',
    id: 'tPskOpDT6wDg9ndzlDOKEg',
    name: 'Bigby\'s',
    img: 'https://s3-media1.fl.yelpcdn.com/bphoto/Qh-uLo180LqoOyQ-uFE50w/o.jpg',
    distance: 2011.4409925875084,
    address: '33 Quimpo Boulevard, SM City Davao, Davao City, 8000 Davao del Sur, Philippines',
    categories: [  
      'Desserts',
      'Seafood',
      'Filipino'
    ],
    'reviewCount': 2
  };

  test('SET_DETAILS sets the place details in the store', () => {
    const action = {
      type: actions.SET_DETAILS,
      payload: details,
    };
    expect(reducer(testState, action)).toEqual(details);
  });

  test('REMOVE_DETAILS removes the place details in the store', () => {
    const action = {
      type: actions.REMOVE_DETAILS,
    };
    expect(reducer(testState, action)).toEqual({});
  });

});