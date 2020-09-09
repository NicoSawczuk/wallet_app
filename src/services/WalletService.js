import { API_URL } from 'services/settings'
import axios from 'axios'

// export function getWallet() {

//     return axios.get(`${API_URL}/wallet`)
//         .then(function (res) {
//             return {
//                 money: res.data.money,
//                 transfers: res.data.transfers
//             }
//         })
//         .catch((error) => {
//             return error
//         })


// }


export async function getWallet(id,token){
    //const res = await axios.get(`${API_URL}/wallet`);
    const res = await axios({
        method: 'get',
        url: `${API_URL}/wallet/${id}`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
      })
    return {
        money: res.data.money,
        transfers: res.data.transfers
    }
}

