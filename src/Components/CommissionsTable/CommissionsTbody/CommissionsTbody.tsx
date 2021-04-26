import React from "react";
import './CommissionsTbody.scss'

interface IProps {
    name: string;
    date: string;
    location: string;

}


export default function CommissionsTbody(
    {
        name,
        date,
        location,
    }: IProps) {


    return (
        <tbody>
        <tr>
            <td>
                <div>{name}</div>
            </td>
            <td>
                <div>{date}</div>
            </td>
            <td>
                <div>{location}</div>
            </td>
        </tr>
        </tbody>
    )
}