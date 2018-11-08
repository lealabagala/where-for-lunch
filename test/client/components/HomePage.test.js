import React from 'react';
import shallowWithStore from 'test/shallowWithStore';
import { createMockStore } from 'redux-test-utils';
import HomePage from 'client/containers/HomePage';
import Button from 'client/components/Button/Button';

test('Button is disabled when longitude or latitude is empty or null', () => {
  const testState = {
    condition: { 
      longitude: null, 
      latitude: null, 
      radius: 500,
    }
  };

  const store = createMockStore(testState);
  const container = shallowWithStore(<HomePage />, store);
  const wrapper = container.dive().find('.homePageWrapper');
  expect(wrapper.find(Button).prop('disabled')).toBe(true);
});