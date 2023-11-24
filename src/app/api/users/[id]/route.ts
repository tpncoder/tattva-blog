import { clientUser } from "@/lib/clientPosts";
import { NextResponse, NextRequest } from "next/server";
import { ObjectId } from "mongodb"

async function initDB() {
    const client = await clientUser;
    const db = client.db("users").collection("users")
    return db
}

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    const db = await initDB()
    const users = await db.findOne({ _id: new ObjectId(params.id) })
    return NextResponse.json(users)
}

export async function POST(request: NextRequest, { params }: { params: { id: string }}) {
    const db = await initDB()
    const user = await request.json()
    Object.assign(user, { createdAt: new Date().toISOString() })
    const result = await db.updateOne({_id: new ObjectId(params.id)}, { $set: user})
    return NextResponse.json(result)
} 