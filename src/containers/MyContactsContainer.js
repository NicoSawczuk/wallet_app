import React, { useState, useEffect } from 'react'
import ContactsList from 'components/ContactsList'
import NewContactForm from 'components/ContactForm'
import Loading from 'components/Loading'
import { getMyContacts, postContact, putContact, deleteContact } from "services/ContactService"
import { Card, Modal, Button, message, Form } from 'antd'
import NotFound from 'pages/NotFound';
import { ExclamationCircleOutlined } from '@ant-design/icons';


export default function MyContactsContainer() {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [visibleModal, setVisibleModal] = useState(false)
    const [edit, setEdit] = useState(false)
    const [form] = Form.useForm();
    const { confirm } = Modal;
    const gridStyle = {
        width: '80%',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };


    const showModal = () => {
        setEdit(false)
        form.setFieldsValue({
            firstname: '',
            lastname: '',
            phonenumber: '',
        })
        setVisibleModal(true)
    };


    function showConfirm(value) {
        confirm({
            title: `Do you Want to delete ${value.firstname} ${value.lastname}?`,
            icon: <ExclamationCircleOutlined />,
            content: `You are going to delete ${value.firstname} ${value.lastname}. Are you sure?`,
            onOk() {
                setLoading(true)
                deleteContact(value.id)
                    .then(function ({ contact }) {
                        setContacts(contacts.filter(el => el !== value))
                        setLoading(false)
                        message.success(`${value.firstname} ${value.lastname} deleted!`)
                    })
                    .catch(function ({ error }) {
                        setError(error)
                        setLoading(false)
                    })
            },
            onCancel() {
                //
            },
        });
    }

    const handleCancel = e => {
        setVisibleModal(false)
    };


    const handleSubmitForm = e => {
        setLoading(true)
        if (!edit) {
            const obj = {
                firstname: form.getFieldValue('firstname'),
                lastname: form.getFieldValue('lastname'),
                phonenumber: form.getFieldValue('phonenumber'),
            }
            postContact(obj)
                .then(function ({ contact }) {
                    setContacts(contacts.concat(contact))
                    form.setFieldsValue({
                        firstname: '',
                        lastname: '',
                        phonenumber: '',
                    })
                    setVisibleModal(false)
                    setLoading(false)
                    message.success('Contact saved!')
                })
                .catch(function ({ error }) {
                    setError(error)
                    setLoading(false)
                })
        } else {
            //armo mi objeto para enviar
            const obj = {
                id: form.getFieldValue('id'),
                firstname: form.getFieldValue('firstname'),
                lastname: form.getFieldValue('lastname'),
                phonenumber: form.getFieldValue('phonenumber'),
            }
            putContact(obj)
                .then(function ({ contact }) {
                    setContacts(function (contacts) {
                        contacts.find(el => el.id === obj.id).firstname = contact.firstname
                        contacts.find(el => el.id === obj.id).lastname = contact.lastname
                        contacts.find(el => el.id === obj.id).phonenumber = contact.phonenumber
                        return contacts
                    })
                    form.setFieldsValue({
                        firstname: '',
                        lastname: '',
                        phonenumber: '',
                    })
                    setVisibleModal(false)
                    setLoading(false)
                    message.success(`${obj.firstname} ${obj.lastname} updated!`)
                })
                .catch(function ({ error }) {
                    setError(error)
                    setLoading(false)
                })
        }
    }

    const handleEditForm = (value) => {
        setEdit(true)
        form.setFieldsValue({
            id: value.id,
            firstname: value.firstname,
            lastname: value.lastname,
            phonenumber: value.phonenumber,
        })
        setVisibleModal(true)

    }

    useEffect(function () {
        setLoading(true)

        //Pedimos los contactos
        getMyContacts()
            .then(

                ({ contacts }) => {
                    setContacts(contacts)
                    setLoading(false)
                })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (error) {
        return (<NotFound />)
    }
    return (
        <>
            {loading ? <Loading /> :
                <>
                    <Card
                        type="inner"
                        title="My Contacts"
                        extra={<Button type="primary" onClick={showModal}>New</Button>}
                        style={gridStyle}>
                        <ContactsList
                            contacts={contacts}
                            loadContactForm={handleEditForm}
                            onDeleteIContact={showConfirm} />
                        <Modal
                            title="New Contact"
                            visible={visibleModal}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Close
                                </Button>,
                            ]}
                        >
                            <div>
                                <NewContactForm
                                    form={form}
                                    onSubmit={handleSubmitForm}
                                />
                            </div>
                        </Modal>
                    </Card>
                </>
            }

        </>

    )

}