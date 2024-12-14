export interface InputProps {
    text: string,
    name: string,
    type:string,
    placeholder?: string,
    value: string,
    onChange:(value: string) => void
}

export interface CheckBoxProps {
    text: string,
    name: string,
    value: boolean,
    onChange: (checked: boolean) => void
}

export interface ButtonProps {
    text:string
}