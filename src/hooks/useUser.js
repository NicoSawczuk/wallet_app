import { useCallback, useContext, useState } from 'react'
import Context from 'context/UserContext'

import { loginService } from 'services/AuthService'
import { useLocation } from "wouter";


export default function useUser() {
    const { userAuth, token, setUserAuth, setToken } = useContext(Context)

    const [, setLocation] = useLocation();
    const [errorMessage, setErrorMessage] = useState(null)

    const login = useCallback(({ email, password }) => {
        loginService({ email, password })
            .then(function ({ data }) {
                const { user, access_token, message } = data;

                if (message == null) {
                    setUserAuth({ id: user.id, name: user.name, email: user.email })
                    window.sessionStorage.setItem('token', access_token)
                    setToken(() => window.sessionStorage.getItem('token'))
                    setLocation("/")
                } else {
                    window.sessionStorage.removeItem('token')
                    setToken(() => window.sessionStorage.getItem('token'))
                    setErrorMessage(message)
                }
            })
            .catch(function ({ error }) {
                window.sessionStorage.removeItem('token')
                setToken(() => window.sessionStorage.getItem('token'))

            })
    }, [setToken])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setToken(() => window.sessionStorage.getItem('token'))
        setLocation("/login")
    }, [setToken])

    return {
        isLogged: Boolean(token),
        error: Boolean(errorMessage),
        errorMessage,
        login,
        logout,
        userAuth,
        token
    }
}