import React, { useState, useEffect } from 'react'
import { Card } from 'antd';

import { getTransferDetails } from 'services/Transfers';
import CardLoader from 'components/CardLoader';

export default function TransferDetailContainer({ id }) {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [transfer, setTransfer] = useState({
        description: '',
        amount: '',
        wallet_id: 1
    })

    useEffect(function () {
        setLoading(true)

        getTransferDetails(id)
            .then(function ({ transfer }) {
                setTransfer(transfer)
                setLoading(false)
            })
            .catch(function ({ error }) {
                setError(error)
            })

    }, [id])



    if (loading) {
        return (
            <center>
                <CardLoader
                    speed={6}
                    width={1500}
                    height={245}
                    viewBox="0 0 790 360"
                    backgroundColor="#f5f5f5"
                    foregroundColor="#dbdbdb"
                />
            </center>
        )
    }
    return (

        <div className="mt-2 container">
            <center>
                <Card title="Detalle de transferencia" style={{ width: "40%", textAlign: 'center' }}>
                    <p className="text-left">Description: {transfer.description}</p>
                    <p className="text-left">Amount: ${transfer.amount}</p>
                    <p className="text-left">Wallet: {transfer.wallet_id}</p>
                </Card>
            </center>
        </div>
    )
}