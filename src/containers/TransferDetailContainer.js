import React, { Component } from 'react'
import { Card } from 'antd';
import url from '../config'
import axios from 'axios'
import Loading from '../components/Loading'

export default class TransferDetailContainer extends Component {

    state = {
        loading: false,
        error: null,
        transfer: {
            description: '',
            amount: '',
            wallet_id: 1
        }
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        })
        axios.get(`${url}/transfer/${this.props.id}`)
            .then(res => {
                this.setState({
                    transfer: res.data,
                    loading: false
                })
            }).catch(error => {
                this.setState({
                    error
                })
            })
    }

    render() {
        if (this.state.loading === true) {
            return (
                <Loading />
            )
        }
        return (
            <div className="mt-2 container">
                <center>
                    <Card title="Detalle de transferencia" style={{ width: "50%" }}>
                        <p class="text-left">Description: {this.state.transfer.description}</p>
                        <p class="text-left">Amount: ${this.state.transfer.amount}</p>
                        <p class="text-left">Wallet: {this.state.transfer.wallet_id}</p>
                    </Card>
                </center>
            </div>
        )
    }
}