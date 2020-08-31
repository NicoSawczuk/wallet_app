import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeWallet from 'pages/HomeWallet'
import NotFound from 'pages/NotFound'
import TransferDetail from 'pages/TransferDetail'
import MyContacts from 'pages/MyContacts'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeWallet} />
                <Route exact path="/transfer/:id" component={TransferDetail} />

                <Route exact path="/contacts/" component={MyContacts} />
                <Route exact path="/notfound/" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes