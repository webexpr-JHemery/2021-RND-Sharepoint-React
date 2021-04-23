import React, {useEffect, useState} from "react";
import "./MainPage.scss"
import Button from "../../Components/button/Button";
import { Commissions } from "../../Models/Commissions";
import CommissionAPI from "../../Services/CommissionAPI";


export default function MainPage() {

    const [commissions, getCommissions] = useState<Commissions[]>([])

    useEffect(() => {
        const fetchCommissions = async () => {
            try {
                getCommissions( await CommissionAPI.getList('Commission') )
            } catch (e) {
                console.log(e)
            }
        }
        fetchCommissions()
    }, [])


    return (
        <div>
            <div className="header">
                <h1 className="header__title">R&D Sharepoint React/Sharepoint</h1>
            </div>

            <div className="crud-section">
                <div className="crud-section__show">
                    {commissions.map((commission, index) => {
                        return <div key={index}>{commission.title}</div>
                    })}
                </div>
                <Button name="Ajouter"/>
            </div>
        </div>
    )
}