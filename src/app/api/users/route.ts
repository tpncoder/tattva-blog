import { init } from "next/dist/compiled/webpack/webpack";
import { clientUser } from "@/lib/clientPosts";
import { NextResponse, NextRequest } from "next/server";

async function initDB() {
    const client = await clientUser;
    const db = client.db("users").collection("users")
    return db
}

export async function GET(request: NextRequest) {
    const db = await initDB()
    const users = await db.find({}).toArray()
    return NextResponse.json(users)
}

export async function POST(request: NextRequest, response: NextResponse) {
    const db = await initDB()
    const user = await request.json()
    Object.assign(user, { createdAt: new Date().toISOString() })
    const result = await db.insertOne(user)
    return NextResponse.json(result)
}