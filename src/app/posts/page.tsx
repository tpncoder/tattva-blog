'use client'
import axios from "axios"
import IPost from "@/types/Post"
import Link from "next/link"
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

async function getPosts() {
    const res = await axios.get(`http://localhost:5173/api/posts/`)
    if(!res.data) {
        throw new Error('Failed to fetch data')
    }
    return res.data
}

export default async function Posts() {
    const router = useRouter()
    const posts = await getPosts()
    return (
        <>
        <ul>{
            posts.map((post: IPost) => {
                return <Card key={post._id} className="mb-3 w-fit border-gray-300" isPressable onPress={() => { router.push(`/posts/${post._id}`)}}>
                    <CardHeader>
                        <Link className="block text-xl font-bold" href={"/posts/" + post._id}>{post.title}</Link>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>{ post.content.slice(0, 63) }...</p>
                    </CardBody>
                </Card>
            })                 
        }</ul>
        </>
    )
}