import React from 'react';
import shallowWithStore from 'test/shallowWithStore';
import { createMockStore } from 'redux-test-utils';
import HomePage from 'client/containers/HomePage';
import Button from 'client/components/Button/Button';

describe('(Component) HomePage', () => {
  const testState = {
    condition: { 
      radius: 500,
    }
  };

  const store = createMockStore(testState);
  const container = shallowWithStore(<HomePage />, store);
  let button = container.dive().find(Button);

  it('Loads the div wrapper', () => {
    expect(container.dive().find('.homePageWrapper').exists()).toBe(true);
  });

  it('Loads a button', () => {
    expect(button.exists()).toBe(true);
  });

  it('Loads a disabled button with the initial state', () => {
    expect(button.prop('disabled')).toBe(true);
  });
  
  it('Loads an enabled button if the state contains latitude and longitude values', () => {
    testState.condition.latitude = 7.0582272;
    testState.condition.longitude = 125.60138239999998;
    button = container.dive().find(Button);
    expect(button.prop('disabled')).toBe(false);
  });

});