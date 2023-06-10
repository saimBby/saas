import { useState } from 'react'

export const useSignup = () => {
    const [error, setError] = useState(null)

    const signup = async (username, password) => {
        setError(null)

        const response = await fetch("http://localhost:5000/api/user/signup", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            console.log("success")
        }
    }   

    return { signup,  error }
}