'use client'
import { login } from "./login";
import { useState } from "react"
import Link from "next/link"

export default function Login() {
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleLogin = async () => {
        const res = await login({ "userName": userName, "password": password })
        setLoggedIn(res)
    }
    
    return (
        <main>
        <h1 className="text-3xl mb-4 font-bold">Welcome!</h1>
        <div className="border border-gray-300 w-fit p-4 rounded-lg h-64">
        <div>
        <input
        value={userName}
        placeholder="Enter your user name"
        onChange={(event) => {
            setUserName(event.target.value)
        }}
        />
        <input
        value={password}
        placeholder="Enter your password"
        type="password"
        onChange={(event) => {
            setPassword(event.target.value)
        }}
        />
        <button type="button" onClick={handleLogin}>Login</button>
        <p className="mt-3 text-gray-600">Need an account? <Link href="/auth/register" className="text-sky-600">Sign Up</Link></p>
        </div>
        </div>
        </main>
        )
    }