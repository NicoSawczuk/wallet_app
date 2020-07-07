import React from 'react'
import NavBar from '../components/NavBar'
import ContactsList from '../components/ContactsList'
import axios from 'axios'
import url from '../config'
import Loading from '../components/Loading'


export default class MyContacts extends React.Component {

    state = {
        contacts: [],
        loading: false,
        error: null
    }

    componentDidMount() {
        this.setState({
            loading: true
        })

        axios.get(`${url}/contacts`)
        .then((res)=>{
            this.setState({
                contacts: res.data,
                loading: false
            })
        }).catch((error)=>{
            this.setState({
                error
            })
        })

        // try {
        //     let res = await fetch(`${url}/contacts`)
        //     let data = await res.json()
        //     console.log(data)

        //     this.setState({
        //         contacts: data,
        //         loading: false
        //     })

        //     console.log(this.state.contacts)

        // } catch (error) {
        //     this.setState({
        //         error
        //     })
        // }

    }

    render() {
        if (this.state.loading){
            return (<Loading/>)
        }
        return (
            <>
                <NavBar />
                <ContactsList contacts={this.state.contacts} />
            </>
        )
    }
}