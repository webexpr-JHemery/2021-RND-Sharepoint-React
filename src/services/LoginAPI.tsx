import axios from "axios";
import {LOGIN_API} from "../config";
import {history} from "../Containers/App";

let XMLParser = require('react-xml-parser')

function authenticate(username: string, password: string) {
    return axios.post(LOGIN_API, {
        url: 'https://webexprcne.sharepoint.com/sites/bnpp-cpr-2',
        username: username,
        password: password,
    })
        .then((response) => {
            let xml = new XMLParser().parseFromString(response.data)
            let token = xml.getElementsByTagName('wsse:BinarySecurityToken')
            return token.map((securityToken: any) => {
                if(securityToken.value === undefined) {
                    return history.push('/app')
                } else {
                    return history.push("app/home")
                }
            })
        }).catch((e) => {
            console.log(e)
        })
}

// eslint-disable-next-line
export default {
    authenticate
}