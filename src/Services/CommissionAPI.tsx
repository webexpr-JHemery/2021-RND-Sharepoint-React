import axios from "axios";
import {Commissions} from "../Models/Commissions";
import {sp} from "@pnp/sp/presets/all";


sp.setup({
    sp: {
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjIwNjQ5MzU0LCJuYmYiOjE2MjA2NDkzNTQsImV4cCI6MTYyMDczNjA1NCwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhNmZmZDk1YS05YjI1LTRiYmQtOTQ2Mi03YjEyNTBjMzc4ZGZAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiZTZmNjAwY2UtY2M5ZC00ODNiLWFhN2QtYmFhNDA4YzgxMDNmIiwic3ViIjoiZTZmNjAwY2UtY2M5ZC00ODNiLWFhN2QtYmFhNDA4YzgxMDNmIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.H-c2FPQvRgt9unyyckUwvK1g2dNu6zwjk3Rg7xBAFv2ifbfxjKyBzver_jvCj_t3Uwu2vlrQMU9Jkgs5xGWWUDAJR82Tm_i7SkMh7VIi-PDOI0zcRgg2VkvCbLLHRabwxFr0PZ9YVq0_pSl05IXmlqil_pgtlcx54rx0kbv5QsMre6I3Dut-3XeABivbmEpyCs5mLz3TCSlndUwcVEtSnzlw5Wsf8WXb4C-wmyubaLGxzznIuT76cVuuT2G4ZKw8vrTSI9jozC1KEeyvihUGPP_E9cc9VhowQp3hEKNfEkgg1H4fMOctYE375c1tbwEfbQyMNwXj6OUNmFBH7osAOw',
            Accept: "application/json;odata=nometadata",
        },
        baseUrl: "https://webexprcne.sharepoint.com/sites/bnpp-cpr-2",
    }
})

async function getList(list: string) {
    return sp.web.lists.getByTitle(list).items.get().then((response: any) => {
        return response.map((mapped: any) => new Commissions(mapped))
    })
}

async function addItems(list: string, title: string, place: string) {
    return sp.web.lists.getByTitle(list).items.add({
        Title: title,
        Place: place,
    })
}

async function deleteItems(list: string, itemid: string, titre?: string) {
    const axiosConfig = {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjE5NTI3NDk0LCJuYmYiOjE2MTk1Mjc0OTQsImV4cCI6MTYxOTYxNDE5NCwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhODQwNTk4Zi1lYzIyLTRiNmEtYWYwMy1mNjI5NTZkYzdlYTdAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5Iiwic3ViIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5IiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.jAgbHZVuaMWFFy4FMyiHlGeG1wAOcPPstJ5Z9sO_KrE9AAEs3OnO39yZxGGSOe5wP7v9iXgD4k5wlLdD5q7SSwNykG0k3XFCRoYl6vcNL8luL_9l5_jZN9E-GYiQg__CgJmrpVz1n0ZX963POLXMFRNA8Jjae__WDskWPnlNUobnhcKqFCPotx7sbW6Vs06as5YssCMMNJ10IqzgrTUUajxf-EU6U1rf9wju4LjKSo32zS9BMb3zuYq3sFxNJRkfrqNHMHVkbfcvsOfgIX5oC1MRTCkf1R-Rch3r_0jCRXqhbSeVoameXBb_yp2nKZHv_8RJcKqEu88qH7u0AoADMA',
            "Accept": "application/json;odata=verbose",
            'content-type': 'application/json; odata=verbose',
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            'X-HTTP-Method': 'DELETE'
        }
    }
    return axios.post(`https://webexprcne.sharepoint.com/sites/bnpp-cpr-2/_api/web/lists/getbytitle('${list}')/items("${itemid}")`, axiosConfig)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });
}

// eslint-disable-next-line
export default {
    getList,
    addItems,
    deleteItems,
}
