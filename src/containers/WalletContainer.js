import React, { useEffect, useState, useContext } from 'react';
import TransferForm from 'components/TransferForm'
import TransferList from 'components/TransferList'
import NotFound from 'pages/NotFound';
import { message } from 'antd'

import Loading from 'components/Loading'

import { postTransfer } from 'services/TransferService'
import { getWallet } from 'services/WalletService';

import Context from 'context/UserContext'


export default function Wallet() {
    const {userAuth} = useContext(Context)
    const [money, setMoney] = useState(0.0)
    const [transfers, setTransfers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ status: '', statusText: '' })
    const [form, setForm] = useState({
        description: '',
        amount: '',
        wallet_id: userAuth.id
    })



    //Va a esperar por los eventos en los inputs
    const handleChange = e => {

        //Vamos a cambiar el estado de form mientras cambie el atributo name del componente TransferForm
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        //Primero anulamos es refresco de la pagina
        e.preventDefault()

        setLoading(true)
        const token = window.sessionStorage.getItem('token')
        postTransfer(form, token)
            .then(function ({ amount, transfer }) {
                setMoney(money + amount)
                setTransfers(transfers.concat(transfer))

                setForm({
                    description: "",
                    amount: "",
                    wallet_id: userAuth.id,
                });
                setLoading(false)
                message.success('Transfer saved!')

            })
            .catch((error) => {
                setError({
                    status: String(error.response.status),
                    statusText: String(error.response.statusText)
                })
                setLoading(false)
            })


    }
 
    useEffect(function () {
        setLoading(true)
        const token = window.sessionStorage.getItem('token')
        getWallet(userAuth.id,token)
            .then(function ({ money, transfers }) {
                setMoney(money)
                setTransfers(transfers)
                setLoading(false)

            })
            .catch((error) => {
                setError({
                    status: String(error.response.status),
                    statusText: String(error.response.statusText)
                })
                setLoading(false)
            })


    }, [userAuth])


    if (error.status != '' && error.statusText != '') {
        return (<NotFound error={error} />)
    }

    return (
        <>
            {loading ? <Loading /> :
                <>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12 m-t-md">
                                <p className="title" style={{ fontSize: "84px" }}>
                                    $ {money}
                                </p>
                            </div>
                            <div className="col-md-12">
                                <TransferForm
                                    form={form}
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                />
                            </div>
                        </div>
                        <div className="m-t-md text-center">
                            <TransferList
                                transfers={transfers}
                            />
                        </div>
                    </div></>}
        </>
    )
}




