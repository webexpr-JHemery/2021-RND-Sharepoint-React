import axios from "axios";
import {Commissions} from "../Models/Commissions";

function getList(list: string) {
    return axios.get(`https://webexprcne.sharepoint.com/sites/bnpp-cpr-2/_api/web/lists/getbytitle('${list}')/items?$select=Title` , {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjE5MDk5NzYzLCJuYmYiOjE2MTkwOTk3NjMsImV4cCI6MTYxOTE4NjQ2MywiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhODQwNTk4Zi1lYzIyLTRiNmEtYWYwMy1mNjI5NTZkYzdlYTdAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5Iiwic3ViIjoiOWNlNmUzZGQtY2QzMy00N2EwLTljZmEtMzMwZTIzMTcwMjU5IiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.FYFzv7DOqTx5Txdc0spgSqhVkvcI9Sta8qYzhtjHKHk1qHb-LKmBsIGEdM9nb20TeXgJXSXFEW38nxwf-E4KtUF1KEDGIK5syTJk6f1lvnV7odiqBJ-KwEBjzV033s2Mm7o8tV6APdY4IMFq9eHi9zgXmn3PolVcgGPeCNSmVT46jwxRxDSiGHLM-jnoov_JpUSkE4c14ixQ5JXbC2-ZoP51NJiWXkLq1O0nfDjdhBlrvKBxT7ai-hpZCcLXvrd_J0ySeCoX6fGgHn1-e69FMfVVZ3ZjqP8taDnYax2pFG-D6FmfnGkaNY20deEYHoXNZNe9ZStEmP1T4m2hwRppoA',
            'Accept': 'application/json;odata=nometadata'
        },
    }).then((response) => {
        return response.data.value.map((mapped: any) => new Commissions(mapped));
    }).catch((error) => {
        console.log(error);
    });
}


export default {
    getList
}
