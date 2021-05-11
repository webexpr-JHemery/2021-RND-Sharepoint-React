import {News} from "../Models/News";
import {sp} from "@pnp/sp/presets/all";


sp.setup({
    sp: {
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjIwNzM4NjQ5LCJuYmYiOjE2MjA3Mzg2NDksImV4cCI6MTYyMDgyNTM0OSwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhNmZmZDk1YS05YjI1LTRiYmQtOTQ2Mi03YjEyNTBjMzc4ZGZAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiZTZmNjAwY2UtY2M5ZC00ODNiLWFhN2QtYmFhNDA4YzgxMDNmIiwic3ViIjoiZTZmNjAwY2UtY2M5ZC00ODNiLWFhN2QtYmFhNDA4YzgxMDNmIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.Y982wkzVRpHdAfe4jat_YAr_a132qKpSQ4L2DTJhVXv5yCI5t5T7Bkq24lZDLSLX8AZYBGH6hyDw7NGHmg-XqGznhZLKSxy6jNt3m-vrRrHnH6_xGdyqSAcqCKRMhHlpQP8k6y7fILTBM0Fkh_ko0y17GfxQqIZI-s3e1WaYW4WS6sIAKWL5NuNG3ByvdNEoM-v_YRboc3q6-u2fIYV_gmpkJ-AAsqBCQBl5o2a3gk9E51EO0F6MfjDp681l-gWD9ywgtsYdeQNOaw6uDtiUxx4GplQiIQ9V9OxlORsmUZljOSuheIhp-5raAIb4Zf8YOarOAneTW53VciZxR5fRkg',
            Accept: "application/json;odata=nometadata",
        },
        baseUrl: "https://webexprcne.sharepoint.com/sites/bnpp-cpr-2",
    }
})

async function getList(list: string) {
    return sp.web.lists.getByTitle(list).items.expand('AttachmentFiles').get().then((response: any) => {
        return response.map((mapped: any) => new News(mapped))
    })
}

async function addItems(list: string, title: string, description: string) {
    return sp.web.lists.getByTitle(list).items.add({
        Title: title,
        Description: description,
    })
}

async function addImg(list: string, id: number, file: any) {
    return sp.web.lists.getByTitle(list).items.getById(id).attachmentFiles.add(file.name, file)
}


// eslint-disable-next-line
export default {
    getList,
    addItems,
    addImg,
}
