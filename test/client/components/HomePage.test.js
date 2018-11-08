import React from 'react';
import shallowWithStore from 'test/shallowWithStore';
import { createMockStore } from 'redux-test-utils';
import HomePage from 'client/containers/HomePage';
import Button from 'client/components/Button/Button';

test('Button is disabled when longitude or latitude is empty', () => {
  const testState = {
    condition: { 
      radius: 500,
    }
  };

  const store = createMockStore(testState);
  const container = shallowWithStore(<HomePage />, store);
  const button = container.dive().find(Button);
  expect(button.prop('disabled')).toBe(true);
});