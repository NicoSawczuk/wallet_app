import React from 'react'
import { Route, Switch } from "wouter";

import HomeWallet from 'pages/HomeWallet'
import NotFound from 'pages/NotFound'
import TransferDetail from 'pages/TransferDetail'
import MyContacts from 'pages/MyContacts'
import NavBar from 'components/NavBar';
import Login from 'pages/Login'

export default function Routes() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route component={HomeWallet} path="/" />
                <Route component={TransferDetail} path="/transfer/:id" />

                <Route component={MyContacts} path="/contacts" />
                <Route component={NotFound} path="/notfound" />

                <Route component={Login} path="/login" />

            </Switch>
        </>
    )
}
