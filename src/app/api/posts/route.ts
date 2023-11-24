import { init } from "next/dist/compiled/webpack/webpack";
import { clientPosts } from "@/lib/clientPosts";
import { NextResponse, NextRequest } from "next/server";

async function initDB() {
    const client = await clientPosts;
    const db = client.db("posts").collection("posts")
    return db
}

export async function GET(request: NextRequest) {
    const db = await initDB()
    const posts = await db.find({}).toArray()
    return NextResponse.json(posts)
}

export async function POST(request: NextRequest, response: NextResponse) {
    const db = await initDB()
    const post = await request.json()
    Object.assign(post, { createdAt: new Date().toISOString() })
    const result = await db.insertOne(post)
    return NextResponse.json(result)
}