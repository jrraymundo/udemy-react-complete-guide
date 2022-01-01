import React, { useState, useEffect } from 'react'

/**
 * The object passed to createContext() serves as an initial state/value
 * The dummy functions (e.e.g onLogout and onLogin) are optional but they help with autocomplete in VSCode
 */
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: (email, password) => {}
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', 1)
        setIsLoggedIn(true);
    }
    
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, loginHandler, logoutHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext