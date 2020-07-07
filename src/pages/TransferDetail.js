import React from 'react'

import NavBar from '../components/NavBar'
import TransferDetailContainer from '../containers/TransferDetailContainer'


export default class TransferDetail extends React.Component {



    render() {
        //obtenemos el match, ya que el mismo contiene los parametros y necesitamos el id
        const { match } = this.props
        //Se accede al id con {match.params.id}
        return (
            <>
                <NavBar />
                <TransferDetailContainer id={match.params.id} />
            </>
        )
    }
}