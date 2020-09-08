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

export async function getMyContacts(token) {
    const res = await axios({
        method: 'get',
        url: `${API_URL}/contacts`,
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    return {
        contacts: res.data,
    }
}

export async function postContact(form, token) {
    const res = await axios({
        method: 'post',
        url: `${API_URL}/contacts`,
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data:form
    });
    return {
        contact: res.data,
    }
}

export async function putContact(form,token) {
    const res = await axios({
        method: 'put',
        url: `${API_URL}/contacts/${form.id}`,
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data:form
    });
    return {
        contact: res.data,
    }
}

export async function deleteContact(form, token) {
    const res = await axios({
        method: 'delete',
        url: `${API_URL}/contacts/${form}`,
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    return {
        
        contact: res.data,
    }
}