import React, {useState} from "react";
import './Input.scss';

interface IProps {
    name: string;
    placeholder: string;
    onSearch: (text ?: string) => void
}

export default function Input(
    {
        placeholder,
        name,
        onSearch
    }: IProps) {

    const [value, setValue] = useState<string>()


    return (
            <input
                name={name}
                className="commission__input"
                type="text"
                onChange={(e: any) => setValue(e.target.value)}
                onKeyPress={(e: any) => e.charCode === 2 ? onSearch(value) : null}
                value={value}
                placeholder={placeholder}
            />
    )
}