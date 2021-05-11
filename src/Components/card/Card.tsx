import React from "react";
import './Card.scss'

interface IProps {
    title: string;
    description: string;
    cardImg: any;
    auteur: string;
}

export default function Card(
    {
        title,
        description,
        cardImg,
        auteur,
    }: IProps
) {


    return (

        <div className="card">
            <img className="card__img" src={cardImg} alt="cardimg"/>
            <div className="card__infos">
                <div className="card__title">{title}</div>
                <div className="card__description">{description}</div>
                <div className="card__author">{auteur}</div>
            </div>
        </div>
    )
}