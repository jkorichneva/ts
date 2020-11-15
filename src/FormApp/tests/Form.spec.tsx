import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Form from '../Form';

let container: HTMLElement|null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    document.body.removeChild(container);
    container = null;
});

test('renders Form', () => {
    act(() => {
        ReactDOM.render(<Form />, container);
    });
    expect(container).toMatchSnapshot();
});
