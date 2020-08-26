import React,{ ChangeEventHandler } from 'react';

export default interface InputInterface {
    value?: string|number;
    placeholder: string;
    type: string;
    theme?: string;
    size?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
