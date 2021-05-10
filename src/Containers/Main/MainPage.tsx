import React, {useEffect, useState} from "react";
import "./MainPage.scss"
import Button from "../../Components/button/Button";
import {Commissions} from "../../Models/Commissions";
import CommissionAPI from "../../Services/CommissionAPI";
import CommissionsThead from "../../Components/CommissionsTable/CommissionsThead/CommissionsThead";
import CommissionsTbody from "../../Components/CommissionsTable/CommissionsTbody/CommissionsTbody";



export default function MainPage() {
    const [commissions, setCommissions] = useState<Commissions[]>([])
    const [inputValue, setInputValue] = useState<any>({
        Title: "",
        Place: '',
    })



    useEffect(() => {
        const fetchCommissions = async () => {
            try {
               setCommissions(await CommissionAPI.getList('Commission'))
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
        await CommissionAPI.addItems('Commission', inputValue.Title, inputValue.Place)
    }




    return (
        <div className="container">
            <div className="header">
                <h1 className="header__title">R&D Sharepoint React/Sharepoint</h1>
            </div>

            <div className="infos-section">
                <h1>Détails des commissions</h1>
                <table>
                    <thead>
                    <tr>
                        <CommissionsThead title='ID'/>
                        <CommissionsThead title='Titre de la commission'/>
                        <CommissionsThead title='Date de la commission'/>
                        <CommissionsThead title='Lieu'/>
                    </tr>
                    </thead>

                    {commissions && commissions.map((commission, key) => {
                        return <CommissionsTbody
                            key={key}
                            id={commission.id}
                            name={commission.title}
                            date={commission.date}
                            location={commission.place}
                        />
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