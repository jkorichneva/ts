import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';

test('renders Input', () => {
    const spy = jest.fn();
    const wrapper = mount(<Input  onChange={spy} placeholder="Инпут" type="text" />);
    expect(wrapper).toMatchSnapshot();
});

test('should change Input', () => {
    const spy = jest.fn();
    const wrapper = mount(<Input  onChange={spy} placeholder="Инпут" type="text" />);
    const input = wrapper.find('input');
    input.simulate('change');
    expect(spy).toHaveBeenCalled();
});
