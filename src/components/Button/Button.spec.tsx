import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

test('renders Button', () => {
    const wrapper = mount(<Button text="Кнопка" />);
    expect(wrapper).toMatchSnapshot();
});
