'use server'
import IUser from "@/types/User"
import axios from "axios"

export async function register(userData: IUser) {
    const res = await axios.post(`http://localhost:5173/api/users/`, userData)
    if(!res.data) throw new Error("Failed to create user")
    return res.data
}