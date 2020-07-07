import React, { Component } from 'react';
import TransferForm from '../components/TransferForm'
import TransferList from '../components/TransferList'
import axios from 'axios'
import { message } from 'antd'

import Loading from '../components/Loading'
import url from '../config'


export default class Wallet extends Component {

    state = {
        money: 0.0,
        transfers: [],
        error: null,
        loading: false,
        form: {
            description: '',
            amount: '',
            wallet_id: 1
        }
    }



    //Va a esperar por los eventos en los inputs
    handleChange = e => {

        //Vamos a cambiar el estado de form mientras cambie el atributo name del componente TransferForm
        this.setState({
            //con ...this.state.form, le decimos que mantenga lo que yay existe, para que no sobrescriba los inouts
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = e => {
        //Primero anulamos es refresco de la pagina
        e.preventDefault()

        console.log(e)
        this.setState({
            loading: true
        })



        axios.post(`${url}/transfer`, this.state.form)
            .then(res => {
                this.setState({
                    transfers: this.state.transfers.concat(res.data),
                    money: this.state.money + (parseInt(res.data.amount)),
                    form: {
                        description: '',
                        amount: '',
                        wallet_id: 1
                    },
                    loading: false
                });
                message.success('This is a success message');
            }).catch(error => {
                this.setState({
                    error
                })
            })


        // try {
        //     //Para enviar info debemos crear un objeto de configuracion
        //     let config = {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'aplication/json',
        //             'Content-Type': 'aplication/json'
        //         },
        //         body: JSON.stringify(this.state.form)
        //     }

        //     //Realizamos la peticion
        //     let res = await fetch(`${url}/transfer`, config)
        //     let data = await res.json()


        //     //Si todo sale bien, vamos a tener la data, entocnes actualizamos el estado
        //     this.setState({
        //         transfers: this.state.transfers.concat(data),
        //         money: this.state.money + (parseInt(data.amount)),
        //         form: {
        //             description: '',
        //             amount: '',
        //             wallet_id: 1
        //         },
        //         loading: false
        //     })

        // } catch (error) {
        //     this.setState({
        //         error
        //     })
        // }

    }

    async componentDidMount() {
        this.setState({
            loading: true
        })


        axios.get(`${url}/wallet`)
            .then(res => {
                this.setState({
                    money: res.data.money,
                    transfers: res.data.transfers,
                    loading: false
                })
            })
            .catch((error) => {
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
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 m-t-md">
                        <p className="title" style={{ fontSize: "84px" }}>
                            $ {this.state.money}
                        </p>
                    </div>
                    <div className="col-md-12">
                        <TransferForm
                            form={this.state.form}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
                <div className="m-t-md text-center">
                    <TransferList
                        transfers={this.state.transfers}
                    />
                </div>
            </div>
        )
    }
}




