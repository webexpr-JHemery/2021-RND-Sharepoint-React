import React from "react";
import './card.scss'

interface IProps {
    title: string;
    description: string;
    image: string;
    auteur: string;
}

export default function Card(
    {
        title,
        description,
        image,
        auteur,
    }: IProps
) {


    return (

        <div className="card">
            <img className="card__img"
                src={image}
                alt="image"
            />

        </div>
    )
}