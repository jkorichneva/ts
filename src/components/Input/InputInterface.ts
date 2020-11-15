import React,{ FormEventHandler } from 'react';

export default interface InputInterface {
    value?: string|number;
    placeholder: string;
    type: string;
    theme?: string;
    size?: string;
    onChange: FormEventHandler<HTMLInputElement>;
}
