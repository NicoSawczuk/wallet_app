import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [userAuth, setUserAuth] = useState({ id: 0, name: '', email: '' })
    const [token, setToken] = useState(() => window.sessionStorage.getItem('token'))

    return <Context.Provider value={{ userAuth, token, setUserAuth, setToken }}>
        {children}
    </Context.Provider>
}

export default Context

