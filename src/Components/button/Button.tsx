import React from "react";
import './Button.scss'


interface IProps {
    name: string,

}

export default function Button(
    {
        name
    }: IProps) {

    return (
        <div>
            <button className="button">
                {name}
            </button>
        </div>
    )
}