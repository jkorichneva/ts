import React, {FunctionComponent} from 'react';
import ButtonInterface from './ButtonInterface';
import './Button.css';

export const Button: FunctionComponent<ButtonInterface> = ({text, theme = 'light', size= 'm'} ) =>
    <button
        className={`button button_${theme} button_size-${size}`}
    >
        {text}
    </button>;

export default Button;
