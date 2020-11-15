import React, {useState, useReducer, FormEvent} from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Switcher from './fragments/Switcher/Switcher';
import Success from './fragments/Success/Success';
import initialState, {StateInt} from './constants/initialState';
import {getTheme, validate, validateForm} from "./utils/helpers";

import './Form.css';

type Action = ActionFieldChange | SimpleAction

type ActionFieldChange = {
    type: 'FIELD_CHANGE';
    event: React.FormEvent<HTMLInputElement>;
    field: string;
}

type SimpleAction = {
    type: 'SET_BUTTON_LOADING'|'SUBMIT';
}

function reducer(state: StateInt, action: Action): StateInt {
    switch (action.type) {
    case 'FIELD_CHANGE':
        /* tslint:disable-next-line: no-case-declarations */
        const validated = validate(action.field, action.event.currentTarget.value);
        if (validated) {
            return { ...state, [action.field]: action.event.currentTarget.value };
        } else {
            return state;
        }
    case 'SET_BUTTON_LOADING':
        return { ...state, buttonLoading: true };
    case 'SUBMIT':
        const validatedForm = validateForm(state);
        return { ...state, isCompleted: true };
    default:
        return state;
    }
}

function Form(): JSX.Element {
    const [isDark, setIsDark] = useState(false);
    const [{
        surname,
        name,
        job,
        phone,
        isCompleted,
        buttonLoading
    }, dispatch] = useReducer(reducer, initialState);
    return (
        <div className={`form form_theme-${isDark ? 'dark' : 'light'}`}>
            <Switcher isDark={isDark} onThemeChange={(): void => setIsDark(!isDark)}/>
            {!isCompleted && (<>
                <Input
                    type="text"
                    placeholder="Surname"
                    theme={getTheme(isDark)}
                    value={surname}
                    onChange={(event: FormEvent<HTMLInputElement>): void => dispatch({type: 'FIELD_CHANGE', event, field: 'surname'})}
                />
                <Input
                    type="text"
                    placeholder="Name"
                    theme={getTheme(isDark)}
                    value={name}
                    onChange={(event: FormEvent<HTMLInputElement>): void => dispatch({ type: 'FIELD_CHANGE', event, field: 'name' })}
                />
                <Input
                    type="text"
                    placeholder="Job"
                    theme={getTheme(isDark)}
                    value={job}
                    onChange={(event: FormEvent<HTMLInputElement>): void => dispatch({ type: 'FIELD_CHANGE', event, field: 'job' })}
                />
                <Input
                    type="tel"
                    placeholder="Phone number"
                    theme={getTheme(isDark)}
                    value={phone}
                    onChange={(event: FormEvent<HTMLInputElement>): void => dispatch({ type: 'FIELD_CHANGE', event, field: 'phone' })}
                />
                <Button text="Apply" theme={getTheme(isDark)} isLoading={buttonLoading} onClick={(): void => {
                    dispatch({ type: 'SET_BUTTON_LOADING' });
                    setTimeout(() => {
                        dispatch({ type: 'SUBMIT' });
                    }, 5000);
                }}/>
            </>)}
            {isCompleted && <Success />}
        </div>
    )
}

export default Form;
