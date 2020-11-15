export default interface ButtonInterface {
    text: string;
    theme?: string|"light";
    size?: string|"s";
    onClick?:  () => void;
    isLoading?: boolean;
}
