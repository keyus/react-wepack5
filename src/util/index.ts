import { matchPath } from 'react-router-dom'
import { menusFlat } from '../routes'
import { nanoid } from "nanoid";

//xhr, axios, response or fetch response
interface Response {
    headers: any,
    data: Blob,
    [key: string]: any,
}

class Util {
    reg = {
        phone: /^1[3-9]\d{9}$/,
        number: /^\d+$/,                                   //数字
        numberEnZh: /^[0-9a-zA-Z\u4e00-\u9fa5]{1,}$/,      //数字、英文、中文
        numberEn: /^[0-9a-zA-Z]{1,}$/,                     //数字、英文
        username: /^[a-zA-Z0-9]{6,20}$/,
        password: /^[a-zA-Z0-9~!@#$%^&*()_\-,.]{8,16}$/,   //数字、英文、特殊字符
    }
    downloadFile = (response: Response) => {
        let filename: string;
        if (response.headers && typeof Headers !== 'undefined' && response.headers instanceof Headers) {
            filename = (response.headers as any).get('content-disposition').split('fileName=')[1];
        } else {
            filename = response.headers["content-disposition"].split("fileName=")[1];
        }
        filename = decodeURIComponent(filename);
        const url = window.URL.createObjectURL(response.data);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    matchMenus = (path: string) => {
        const res = menusFlat.filter(it => {
            return matchPath({
                path: it.match,
                caseSensitive: true,
                end: true,
            }, path);
        })
        return res.map(it => it.url);
    }

    rowKey = () => nanoid()

    

}
export default new Util();