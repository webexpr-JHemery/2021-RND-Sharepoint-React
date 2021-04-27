import axios from "axios";
import {Commissions} from "../Models/Commissions";


async function getList(list: string) {
    return axios.get(`https://webexprcne.sharepoint.com/sites/bnpp-cpr-2/_api/web/lists/getbytitle('${list}')/items`, {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjE5NTI3NDk0LCJuYmYiOjE2MTk1Mjc0OTQsImV4cCI6MTYxOTYxNDE5NCwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhODQwNTk4Zi1lYzIyLTRiNmEtYWYwMy1mNjI5NTZkYzdlYTdAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5Iiwic3ViIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5IiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.jAgbHZVuaMWFFy4FMyiHlGeG1wAOcPPstJ5Z9sO_KrE9AAEs3OnO39yZxGGSOe5wP7v9iXgD4k5wlLdD5q7SSwNykG0k3XFCRoYl6vcNL8luL_9l5_jZN9E-GYiQg__CgJmrpVz1n0ZX963POLXMFRNA8Jjae__WDskWPnlNUobnhcKqFCPotx7sbW6Vs06as5YssCMMNJ10IqzgrTUUajxf-EU6U1rf9wju4LjKSo32zS9BMb3zuYq3sFxNJRkfrqNHMHVkbfcvsOfgIX5oC1MRTCkf1R-Rch3r_0jCRXqhbSeVoameXBb_yp2nKZHv_8RJcKqEu88qH7u0AoADMA',
            'Accept': 'application/json;odata=nometadata'
        },
    }).then((response) => {
        return response.data.value.map((mapped: any) => new Commissions(mapped));
    }).catch((error) => {
        console.log(error);
    });
}

async function addList(list: string, titre?: string) {
    let data = `{ "__metadata": {"type": "SP.Data.CommissionListItem"},\r\n "Title": "${titre}"}`;

    const axiosConfig = {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjE5NTI3NDk0LCJuYmYiOjE2MTk1Mjc0OTQsImV4cCI6MTYxOTYxNDE5NCwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhODQwNTk4Zi1lYzIyLTRiNmEtYWYwMy1mNjI5NTZkYzdlYTdAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5Iiwic3ViIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5IiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.jAgbHZVuaMWFFy4FMyiHlGeG1wAOcPPstJ5Z9sO_KrE9AAEs3OnO39yZxGGSOe5wP7v9iXgD4k5wlLdD5q7SSwNykG0k3XFCRoYl6vcNL8luL_9l5_jZN9E-GYiQg__CgJmrpVz1n0ZX963POLXMFRNA8Jjae__WDskWPnlNUobnhcKqFCPotx7sbW6Vs06as5YssCMMNJ10IqzgrTUUajxf-EU6U1rf9wju4LjKSo32zS9BMb3zuYq3sFxNJRkfrqNHMHVkbfcvsOfgIX5oC1MRTCkf1R-Rch3r_0jCRXqhbSeVoameXBb_yp2nKZHv_8RJcKqEu88qH7u0AoADMA',
            'Accept': 'application/json; odata=verbose',
            'content-type': 'application/json; odata=verbose'
        }
    }
    return axios.post(`https://webexprcne.sharepoint.com/sites/bnpp-cpr-2/_api/web/lists/getbytitle('${list}')/items`, data, axiosConfig)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });

}

// eslint-disable-next-line
export default {
    getList,
    addList
}
