import { clientPosts } from "@/lib/clientPosts";
import { NextResponse, NextRequest } from "next/server";
import { ObjectId } from "mongodb"

async function initDB() {
    const client = await clientPosts;
    const db = client.db("posts").collection("posts")
    return db
}

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    const db = await initDB()
    const posts = await db.findOne({ _id: new ObjectId(params.id) })
    return NextResponse.json(posts)
}

export async function POST(request: NextRequest, { params }: { params: { id: string }}) {
    const db = await initDB()
    const post = await request.json()
    Object.assign(post, { createdAt: new Date().toISOString() })
    const result = await db.updateOne({_id: new ObjectId(params.id)}, { $set: post})
    return NextResponse.json(result)
} 