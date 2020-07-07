import React from 'react'
import { Table } from 'antd';

const ContactsList = ({ contacts }) => {

    const columns = [
        {
            title: 'Firstname',
            dataIndex: 'firstname',
            key: 'firstname',
            align: 'center'
        },
        {
            title: 'Lastname',
            dataIndex: 'lastname',
            key: 'lastname',
            align: 'center'
        },
        {
            title: 'Phonenumber',
            dataIndex: 'phonenumber',
            key: 'phonenumber',
            align: 'right'
        }
    ];

    const dataSource = [];

    contacts.map((contact) => {
        let cont = {
            key: contact.id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            phonenumber: contact.phonenumber
        }
        dataSource.push(cont)
    })
    console.log(dataSource)

    return (
        <div className="container mt-2">
            <Table dataSource={dataSource} columns={columns} size="middle" />
        </div>
    )
}


export default ContactsList
