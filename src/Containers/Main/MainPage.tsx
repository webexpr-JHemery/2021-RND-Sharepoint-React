import React, {useEffect, useState} from "react";
import "./MainPage.scss"
import Button from "../../Components/button/Button";
import {Commissions} from "../../Models/Commissions";
import CommissionAPI from "../../Services/CommissionAPI";
import CommissionsThead from "../../Components/CommissionsTable/CommissionsThead/CommissionsThead";
import CommissionsTbody from "../../Components/CommissionsTable/CommissionsTbody/CommissionsTbody";
import {sp} from "@pnp/sp-commonjs";

export default function MainPage() {


    const [commissions, getCommissions] = useState<Commissions[]>([])
    const [inputValue, setInputValue] = useState<string>("")


    useEffect(() => {
        const fetchCommissions = async () => {
            try {
                sp.web.select('Title').get().then((w: any) => {
                    console.log(JSON.stringify(w, null, 4))
                })
            } catch (e) {
                console.log(e)
            }
        }
        fetchCommissions()
    }, [])


    const submitData = async () => {
        await CommissionAPI.addItems('Commission', inputValue)
    }

    const deleteData = async () => {
        await CommissionAPI.deleteItems('Commission', '43')
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

                    {commissions.map((commission, key) => {
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
                            name="nom"
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                    </form>
                    {inputValue}
                </div>


                <div className="add-section__button">
                    <Button
                        type="submit"
                        name="Ajouter une commission"
                        send={submitData}
                    />
                    <Button
                    type="submit"
                    name="Supprimer une commission"
                    send={deleteData}
                />

                </div>
            </div>
        </div>
    )
}