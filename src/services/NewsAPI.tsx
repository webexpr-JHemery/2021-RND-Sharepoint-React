import {News} from "../models/News";
import {sp} from "@pnp/sp/presets/all";


sp.setup({
    sp: {
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvd2ViZXhwcmNuZS5zaGFyZXBvaW50LmNvbUBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwiaWF0IjoxNjIxMjMzNjIxLCJuYmYiOjE2MjEyMzM2MjEsImV4cCI6MTYyMTMyMDMyMSwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBhMmZmYmY1Zi0zNTk2LTQ3MzQtYWRlOC1iZGQwODk3ZjY4OWQiLCJuYW1laWQiOiJhNmZmZDk1YS05YjI1LTRiYmQtOTQ2Mi03YjEyNTBjMzc4ZGZAYTJmZmJmNWYtMzU5Ni00NzM0LWFkZTgtYmRkMDg5N2Y2ODlkIiwib2lkIjoiZTZmNjAwY2UtY2M5ZC00ODNiLWFhN2QtYmFhNDA4YzgxMDNmIiwic3ViIjoiZTZmNjAwY2UtY2M5ZC00ODNiLWFhN2QtYmFhNDA4YzgxMDNmIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.Xi63jyVgopQI-YSM2Lqiee_9Jv5j2aQcRHdBL-rioW7u0jmtg4fkzHemFmBHTrc50xRgS6M1VG9HkLc2Mg2okS2GskJEVMVnIxGSnHRGFxCeKrsx0bbJRqJCvkKgHFKHdbYxYhwxvEU94E-OoSZ6ijo94_YNwmyHu8DswB8pDicInfMAKqhCFiqXuBSoHv6NU0NAx108luYQ4W5y66H1i5Q5Y3mEwbkelHT-usdWqNCJB09XLKxUALGAREz20wSeMGscUQ7NoD9lpSuhUDdswyjWkbcfCURzCjyLlSO6NO0ROI2hbrJcrUPTh-7shpq8Zk1MK0OHWYD6PL_lIA2oLA',
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
