import React, {useEffect, useState} from "react";
import "./MainPage.scss"
import Button from "../../Components/button/Button";
import {News} from "../../Models/News";
import NewsAPI from "../../Services/NewsAPI";
import Search from "../../Components/search/search";

export default function MainPage() {
    const [news, setNews] = useState<News[]>([])
    const [inputValue, setInputValue] = useState<any>({
        Title: "",
        Place: '',
    })


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

    const submitData = async () => {
        await NewsAPI.addItems('News', inputValue.Title, inputValue.Place)
    }

    return (
        <div className="container">
            <div className="header">
                <div className="header__logo__title">
                    <img className="header__logo" src="images/sharepoint_logo.png" alt=""/>
                    <h1 className="header__title">R&D Sharepoint React/Sharepoint</h1>

                </div>
                <Search name={"search"}
                        width={"50%"}
                />
            </div>

            <div className="infos-section">
                <h1>Détails des commissions</h1>
                <table>
                    {news && news.map((news, key) => {
                        return <div
                            key={key}>
                            id={news.id}
                            name={news.title}
                            date={news.description}
                            location={news.image}
                        </div>


                    })}
                </table>
            </div>
            <div className="add-section">
                <div className="add-section__inputs">
                    <form>
                        <input
                            name="Title"
                            type="text"
                            value={inputValue.Title}
                            onChange={handleChange}
                        />
                        <input
                            name="Place"
                            type="text"
                            value={inputValue.Place}
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <div className="add-section__button">
                    <Button
                        type="submit"
                        name="Ajouter une commission"
                        send={submitData}
                    />
                </div>
            </div>
        </div>
    )
}