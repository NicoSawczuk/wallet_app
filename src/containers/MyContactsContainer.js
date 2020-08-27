import React, { useState, useEffect } from 'react'
import ContactsList from 'components/ContactsList'
import NewContactForm from 'components/NewContactForm'
import Loading from 'components/Loading'
import { getMyContacts, postContact} from "services/Contacts"
import { Card, Modal, Button, message } from 'antd'


export default function MyContactsContainer() {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [visibleModal, setVisibleModal] = useState(false)
    const [formContact, setFormContact] = useState({ firstname: '', lastname: '', phonenumber: '' })
    const gridStyle = {
        width: '80%',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const showModal = () => {
        setVisibleModal(true)
    };

    const handleCancel = e => {
        setVisibleModal(false)
    };

    const handleChangeForm = e => {
        setFormContact({
            ...formContact,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmitForm = e => {
        console.log(formContact)
        setLoading(true)
        postContact(formContact)
        .then(function({contact}){
            setContacts(contacts.concat(contact))
            setFormContact({ firstname: '', lastname: '', phonenumber: '' })
            setVisibleModal(false)
            setLoading(false)
            message.success('Contact saved!')
        })
        .catch(function ({ error }) {
            setError(error)
        })
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
            })
    }, [])

    return (
        <>
            {loading ? <Loading /> :
                <>
                    <Card
                        type="inner"
                        title="My Contacts"
                        extra={<Button type="primary" onClick={showModal}>New</Button>}
                        style={gridStyle}>
                        <ContactsList contacts={contacts} />
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
                                    form={formContact}
                                    onChange={handleChangeForm}
                                    onSubmit={handleSubmitForm} />
                            </div>
                        </Modal>
                    </Card>
                </>
            }
        </>
    )

}