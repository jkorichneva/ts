import React, {useState, useReducer, ChangeEvent} from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Switcher from "../fragments/Switcher/Switcher";
import {getTheme, validate} from "../helpers";

import './Form.css';

type State = {
    surname: string;
    name: string;
    job: string;
    phone: string;
}

type Action = {
    type: string;
    event: React.ChangeEvent<HTMLInputElement>;
    field: string;
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
    case 'FIELD_CHANGE':
        /* tslint:disable-next-line: no-case-declarations */
        const validated = validate(action.field, action.event.target.value);
        if (validated) {
            return { ...state, [action.field]: action.event.target.value};
        } else {
            return state;
        }
    default:
        return state;
    }
}

const initialState = {
    surname: '',
    name: '',
    job: '',
    phone: '',
}

function Form(): JSX.Element {
    const [isDark, setIsDark] = useState(false);
    const [{
        surname,
        name,
        job,
        phone
    }, dispatch] = useReducer(reducer, initialState);
    return (
        <div className={`form form_theme-${isDark ? 'dark' : 'light'}`}>
            <Switcher isDark={isDark} onThemeChange={(): void => setIsDark(!isDark)}/>
            <Input
                type="text"
                placeholder="Surname"
                theme={getTheme(isDark)}
                value={surname}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => dispatch({type: 'FIELD_CHANGE', event, field: 'surname'})}
            />
            <Input
                type="text"
                placeholder="Name"
                theme={getTheme(isDark)}
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => dispatch({ type: 'FIELD_CHANGE', event, field: 'name' })}
            />
            <Input
                type="text"
                placeholder="Job"
                theme={getTheme(isDark)}
                value={job}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => dispatch({ type: 'FIELD_CHANGE', event, field: 'job' })}
            />
            <Input
                type="tel"
                placeholder="Phone number"
                theme={getTheme(isDark)}
                value={phone}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => dispatch({ type: 'FIELD_CHANGE', event, field: 'phone' })}
            />
            <Button text="Apply" theme={getTheme(isDark)}/>
        </div>
    )
}

export default Form;
