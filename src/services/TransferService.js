import { API_URL } from 'services/settings'
import axios from 'axios'

// export function getTransferDetails(id){
//     return axios.get(`${API_URL}/transfer/${id}`)
//             .then(res => {
//                 return {transfer: res.data}
//             }).catch(error => {
//                 return error
//             })
// }

// export function postTransfer(form) {
//     return axios.post(`${API_URL}/transfer`, form)
//         .then(function (res) {
//             return {
//                 amount: parseInt(res.data.amount),
//                 transfer: res.data
//             }
//         }).catch(error => {
//             return error
//         })
// }


export async function getTransferDetails(id, token) {
    const res = await axios({
        method: 'get',
        url: `${API_URL}/transfer/${id}`,
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    return {transfer: res.data}
}

export async function postTransfer(form, token) {
    const res = await axios({
        method: 'post',
        url: `${API_URL}/transfer`,
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data:form
    });
    return {
        amount: parseInt(res.data.amount),
        transfer: res.data
    }
}
