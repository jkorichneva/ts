import React, {FunctionComponent} from 'react';
import ButtonInterface from './ButtonInterface';
import './Button.css';

export const Button: FunctionComponent<ButtonInterface> = ({text, theme = 'light', size= 'm', onClick, isLoading} ) =>
    <button
        className={`button button_${theme} button_size-${size}`}
        onClick={onClick}
    >
        {isLoading && (
            <svg version="1.1" id="L4" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0">
                <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"/>
                </circle>
                <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"/>
                </circle>
                <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"/>
                </circle>
            </svg>
        )}
        {!isLoading && text}
    </button>;

export default Button;
