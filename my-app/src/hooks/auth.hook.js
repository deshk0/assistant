import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)    
    const [userId, setUserId] = useState(null)

    const login = useCallback( (jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.removeItem(storageName)
    }, [])
    const logout = useCallback( () => {
        setToken(null)
        setUserId(null)

        localStorage.setItem(storageName, JSON.stringify({
            userId, token
        }))
    }, [])

    useEffect( () =>{
        const data = JSON.parse(localStorage.getItem(storageName))

    } )

    return {login, logout, token, userId} 


}