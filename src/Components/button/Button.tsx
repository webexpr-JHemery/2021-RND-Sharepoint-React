import React from "react";
import './Button.scss'


interface IProps {
    name: string,
    type ?: any,
    send?: any,
}

export default function Button(
    {
        name,
        type,
        send
    }: IProps) {

    return (

            <button
                onClick={send}
                type={type}
                className="button">
                {name}
            </button>

    )
}