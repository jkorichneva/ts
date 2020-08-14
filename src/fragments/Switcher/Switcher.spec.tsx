import React from 'react';
import { mount } from 'enzyme';
import Switcher from './Switcher';

test('renders Switcher', () => {
    const wrapper = mount(<Switcher isDark={false} onThemeChange={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
});
