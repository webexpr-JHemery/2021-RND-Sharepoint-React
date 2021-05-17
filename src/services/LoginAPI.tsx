import axios from "axios";
import {LOGIN_API, SITE_URL} from "../config";

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
            token.map((securityToken: any) => {
                return securityToken.value
            })
        }).catch((e) => {
            console.log(e)
        })
}

export default {
    authenticate
}