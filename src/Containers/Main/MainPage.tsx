import React, {useEffect, useState} from "react";
import "./MainPage.scss"
import Button from "../../Components/button/Button";
import {News} from "../../Models/News";
import NewsAPI from "../../Services/NewsAPI";
import Search from "../../Components/search/search";
import Card from "../../Components/card/Card";

export default function MainPage() {
    const [news, setNews] = useState<News[]>([])
    const [inputValue, setInputValue] = useState<any>({
        Title: '',
        Description: '',
    })
    const [selectedFile, setSelectedFile] = useState<any>()


    useEffect(() => {
        const fetchCommissions = async () => {
            try {
                setNews(await NewsAPI.getList('News'))
            } catch (e) {
                console.log(e)
            }
        }
        fetchCommissions()
    }, [])


    const handleChange = (e: any) => {
        const value = e.target.value
        setInputValue({
            ...inputValue,
            [e.target.name]: value
        });
    }

    const handleFile = (e: any) => {
        setSelectedFile(e.target.files[0]);
    }

    const submitData = async () => {
        await NewsAPI.addItems('News', inputValue.Title, inputValue.Description)
        await NewsAPI.addImg('News', 2, selectedFile)
    }

    return (
        <div>
            <div className="header">
                <div className="header__logo__title">
                    <img className="header__logo" src="images/sharepoint_logo.png" alt=""/>
                    <h1 className="header__title">R&D Sharepoint React/Sharepoint</h1>

                </div>
                <Search name={"search"}
                        width={"50%"}
                />
            </div>
            <div className="container">

                <div className="infos-section">
                    {news && news.map((news, key) => {
                        let image
                        news.image.map((img: any) => {
                             image = img.ServerRelativeUrl
                            return image
                        })
                        return <Card
                            key={key}
                            title={news.title}
                            description={news.description}
                            cardImg={`https://webexprcne.sharepoint.com${image}`}
                            auteur={'John Doe'}
                        />
                    })}

                </div>
                <div className="add-section">
                    <h1>Formulaire d'ajout</h1>
                    <div className="add-section__inputs">
                        <form className="add-section__form">
                            <input
                                name="Title"
                                type="text"
                                placeholder="Titre"
                                value={inputValue.Title}
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Description"
                                name="Description"
                                type="text"
                                value={inputValue.Description}
                                onChange={handleChange}
                            />
                            <input
                                type="file"
                                name="file"
                                onChange={handleFile}
                            />
                        </form>
                    </div>
                    <div className="add-section__button">
                        <Button
                            type="submit"
                            name="Ajouter une news"
                            send={submitData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}