'use server'
import { clientUser } from "@/lib/clientPosts"
import { cookies } from "next/headers"

interface Credentials {
    userName: string,
    password: string
}

async function initDB() {
    const client = await clientUser;
    const db = client.db("users").collection("users")
    return db
}

export async function login(userCredentials: Credentials) {
    const db = await initDB()
    const user = await db.findOne({ userName: userCredentials.userName})

    cookies().set('loggedIn', 'false')

    if(!user || user.password !== userCredentials.password) return false

    cookies().set('role', user.role.toString())
    cookies().set('loggedIn', 'true')

    return true
}