import React, {useState} from "react";
import Button from "../../Components/button/Button";
import './LoginPage.scss'
import LoginAPI from "../../services/LoginAPI";
import {useForm} from "react-hook-form";




export default function LoginPage() {

    const {register, handleSubmit} = useForm()


    const onSubmit = async (data: any) => {
        try {
            await LoginAPI.authenticate(data.username, data.password)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="login">
            <h1>Bienvenue, veuillez-vous connecter</h1>
            <div className="login__form">
                <form onSubmit={handleSubmit(onSubmit)} className="login__form__section">
                    <input
                        type="text"
                        placeholder="Username"
                        {...register('username')}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        {...register('password')}

                    />
                    <Button
                        name="Connectez-vous"
                    />
                </form>
            </div>
        </div>
    )
}