import React from 'react'
import axios from 'axios'
import { API_URL } from "services/settings"

// export function getMyContacts() {
//     return axios.get(`${API_URL}/contacts`)
//         .then((res) => {
//             return {
//                 contacts: res.data,
//             }
//         }).catch((error) => {
//             return error
//         })
// }

// export function postContact(form) {
//     return axios.post(`${API_URL}/contacts`, form)
//         .then(function (res) {
//             return {
//                 contact: res.data,
//             }
//         }).catch(error => {
//             return error
//         })
// }

export async function getMyContacts() {
    const res = await axios.get(`${API_URL}/contacts`);
    return {
        contacts: res.data,
    }
}

export async function postContact(form) {
    const res = await axios.post(`${API_URL}/contacts`, form);
    return {
        contact: res.data,
    }
}

export async function patchContact(form) {
    const res = await axios.patch(`${API_URL}/contacts`, form);
    return {
        contact: res.data,
    }
}



