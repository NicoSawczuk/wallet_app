import React from 'react'
import { Table, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
const ContactsList = ({ contacts, loadContactForm, onDeleteIContact }) => {

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

    const editContact = (value) => {
        loadContactForm(value)
    }

    const deleteContact = (value) => {
        onDeleteIContact(value)
    }

    contacts.map((contact) => {
        let cont = {
            key: contact.id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            phonenumber: contact.phonenumber,
            options: <>
                <Button value="small" onClick={() => editContact(contact)} style={{marginRight: '2px'}}><EditFilled /></Button>
                <Button value="small" onClick={() => deleteContact(contact)} danger><DeleteFilled /></Button>
            </>
        }
        dataSource.push(cont)
    })

    return (
        <div className="container mt-2">
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}


export default ContactsList
