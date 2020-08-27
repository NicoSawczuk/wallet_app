import { API_URL } from 'services/settings'
import axios from 'axios'

export function getWallet() {

    return axios.get(`${API_URL}/wallet`)
        .then(function (res) {
            return {
                money: res.data.money,
                transfers: res.data.transfers
            }
        })
        .catch((error) => {
            return error
        })


}