import axios from "axios";
import {Commissions} from "../Models/Commissions";

async function getList(list: string) {
    return axios.get(`https://webexprcne.sharepoint.com/sites/bnpp-cpr-2/_api/web/lists/getbytitle('${list}')/items`, {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjE5NDM4NjA3LCJuYmYiOjE2MTk0Mzg2MDcsImV4cCI6MTYxOTUyNTMwNywiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhODQwNTk4Zi1lYzIyLTRiNmEtYWYwMy1mNjI5NTZkYzdlYTdAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5Iiwic3ViIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5IiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.gl4Q6iPbvX3kw_lB_A_2PEPbrzTeS1SzRQOuqFkFWMJA5CcyrpirPqRJsiG-hYU419GexHZVsGJ256ul_dzJF0iihPp_pQ9wB4l59jNqXrTIuBZZ0lgKQsmY5N6YHBp8hHPVEehcvOg-Sem3Q6OCRQdoUneKrZDmo32fSNPBb9npVCVWUC2A2GKcK7kX44D_GN4TbwblouLtayRcG_M1NUDIW55poWCW5sXeCYTihiPoDLhaqxMW0etTjzy62CkGxVXDRaE82-aHmf_LOrOnOokdwI0EMkExjNR7TuWm5w7c4wCReruB7TfQduOn3-8FLoXoiMOyW5yzzzUJUkgFvA',
            'Accept': 'application/json;odata=nometadata'
        },
    }).then((response) => {
        return response.data.value.map((mapped: any) => new Commissions(mapped));
    }).catch((error) => {
        console.log(error);
    });
}

async function addList(list: string, titre: string) {
    let data = `{ "__metadata": '
        '{"type": "SP.Data.CommissionListItem"},\r\n ' 
        '"Title": "${titre}", \r\n
        }`;

    return axios.post(`https://webexprcne.sharepoint.com/sites/bnpp-cpr-2/_api/web/lists/getbytitle('${list}')/items`, {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjE5NDM4NjA3LCJuYmYiOjE2MTk0Mzg2MDcsImV4cCI6MTYxOTUyNTMwNywiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhODQwNTk4Zi1lYzIyLTRiNmEtYWYwMy1mNjI5NTZkYzdlYTdAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5Iiwic3ViIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5IiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.gl4Q6iPbvX3kw_lB_A_2PEPbrzTeS1SzRQOuqFkFWMJA5CcyrpirPqRJsiG-hYU419GexHZVsGJ256ul_dzJF0iihPp_pQ9wB4l59jNqXrTIuBZZ0lgKQsmY5N6YHBp8hHPVEehcvOg-Sem3Q6OCRQdoUneKrZDmo32fSNPBb9npVCVWUC2A2GKcK7kX44D_GN4TbwblouLtayRcG_M1NUDIW55poWCW5sXeCYTihiPoDLhaqxMW0etTjzy62CkGxVXDRaE82-aHmf_LOrOnOokdwI0EMkExjNR7TuWm5w7c4wCReruB7TfQduOn3-8FLoXoiMOyW5yzzzUJUkgFvA',
            'Accept': 'application/json; odata=verbose',
            'content-type': 'application/json; odata=verbose'
        },
        data: data
    }).then((response) => {
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
