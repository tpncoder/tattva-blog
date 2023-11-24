'use client'
import { register } from "./register"
import { useState } from "react"
import Link from "next/link"

export default function Register() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ userName, setUserName ] = useState('')
    return (
        <main>
            <h1 className="text-3xl mb-4 font-bold">Create New User</h1>
            <div className="border border-gray-300 w-fit p-4 rounded-lg h-64">
                <form action={() => register({"userName": userName, "email": email, "password": password, "role": "viewer"})}>
                    <input
                        value={email}
                        placeholder="Enter your email"
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
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
                    <button type="submit">Register</button>
                    <p className="mt-3 text-gray-600">Already have an account? <Link href="/auth/login" className="text-sky-600">Log In</Link></p>
                </form>
            </div>
        </main>
    )
}