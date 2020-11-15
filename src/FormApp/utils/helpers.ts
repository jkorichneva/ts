import {StateInt} from '../constants/initialState';

export function getTheme(isDark: boolean ): string
{
    return isDark ? 'dark' : 'light';
}

export function validate(field: string, value: string): boolean {
    switch(field) {
    case 'surname':
        return /^[a-zA-Z\s-]*$/.test(value);
    case 'name':
        return /^[a-zA-Z\s-]*$/.test(value);
    case 'job':
        return  /^[a-zA-Z"\s-.()]*$/.test(value);
    case 'phone':
        return /^[\d\s]*$/.test(value);
    default:
        return true;
    }
}

export function validateForm(state: StateInt): boolean
{
    return true;
}
