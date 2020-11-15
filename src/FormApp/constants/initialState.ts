export interface StateInt {
    surname: string;
    name: string;
    job: string;
    phone: string;
    isCompleted: boolean;
    buttonLoading: boolean;
}

export default {
    surname: '',
    name: '',
    job: '',
    phone: '',
    buttonLoading: false,
    isCompleted: false,
}
