'use server'
import { clientUser } from "@/lib/clientPosts"

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
    if(!user) return false
    if(user.password !== userCredentials.password) return false
    return true
}