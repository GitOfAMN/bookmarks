import { useState, useEffect } from "react"

export default function App() {
    //Login
    const [credentials, setCredentails] = useState({
        email: '',
        password: '',
        name: '',
    })
    const [bookmark, setBookmark] = useState({
        title: '',
        url: ''
    })
    const [bookmarks, setBookmarks] = useState([])

    const [token, setToken] = useState('')
    const login = async () => {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }

    //Sign Up
    const signUp = async () => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...credentials })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }

    //Create Bookmark
    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ ...bookmark })
            })
            const data = await response.json
            setBookmarks([data, ...bookmarks])
            setBookmark({
                title: '',
                url: ''
            })

        } catch (error) {
            console.error(error)
        }
    }

    //Delete Bookmark

    //Update Bookmark


    return (
        <>
            <h1>Hello World!</h1>
        </>
    )
}