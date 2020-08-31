import React from 'react'
import { Table, Button } from 'antd';

const ContactsList = ({ contacts, loadContactForm }) => {

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
        },
        {
            title: 'Options',
            dataIndex: 'options',
            key: 'options',
            align: 'right'
        }
    ];

    const dataSource = [];

    const passContactData = (value) =>{
        loadContactForm(value)
    }

    contacts.map((contact) => {
        let cont = {
            key: contact.id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            phonenumber: contact.phonenumber,
            options: <Button value="small" onClick={() => passContactData(contact)}>Edit</Button>
        }
        dataSource.push(cont)
    })

    return (
        <div className="container mt-2">
            <Table dataSource={dataSource} columns={columns}  />
        </div>
    )
}


export default ContactsList
