import React,{ ChangeEvent } from 'react';

export default interface InputInterface {
    value?: string|number;
    placeholder: string;
    type: string;
    theme?: string;
    size?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
