import React from "react";
import './CommissionsThead.scss'

interface IProps {
    title: string;
}


export default function CommissionsThead (
    {
        title
    }: IProps) {



    return (
        <th className="commmission__th">
            {title}
        </th>
    )
}