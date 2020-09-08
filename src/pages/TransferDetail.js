import React from 'react'
import { useRoute } from "wouter"

import TransferDetailContainer from 'containers/TransferDetailContainer'


export default function TransferDetail() {

    const [match, params] = useRoute("/transfer/:id");
    return (
        <>
            <TransferDetailContainer id={params.id} />
        </>
    )
}