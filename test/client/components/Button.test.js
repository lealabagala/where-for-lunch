import React from 'react';
import { shallow } from 'enzyme';
import Button from 'client/components/Button/Button';

describe('(Component) Button', () => {

  it('Should render', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.length).toBe(1);
  });

  it('Should not be disabled if disabled property is not passed', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.prop('disabled')).toBeFalsy();
  });

  it('Should not be disabled if passed the disabled=false property', () => {
    const wrapper = shallow(<Button disabled={false}/>);
    expect(wrapper.prop('disabled')).toBeFalsy();
  });

  it('Should be disabled if passed the disabled=true property', () => {
    const wrapper = shallow(<Button disabled={true}/>);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

});
