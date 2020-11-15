import React, {FunctionComponent} from 'react';
import InputInterface from './InputInterface';

import './Input.css';

export const Input: FunctionComponent<InputInterface> =
    ({  value,
        placeholder,
        type,
        theme = 'light',
        size= 'm',
        onChange
    }) => {
        // tslint:disable-next-line:max-line-length
        const onChangeInput: (event: React.FormEvent<HTMLInputElement>) => void = (event: React.FormEvent<HTMLInputElement>) => {
            // event.persist();
            onChange(event);
        };
        return (
            <input
                className={`input input_${theme} input_size-${size}`}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeInput}
            />
        );
    }
export default Input;
