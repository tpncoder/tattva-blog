import axios from "axios"
import IPost from "@/types/Post"
import Link from "next/link"

async function getPosts() {
    const res = await axios.get(`http://localhost:5173/api/posts/`)
    if(!res.data) {
        throw new Error('Failed to fetch data')
    }
    return res.data
}

export default async function Posts() {
    const posts = await getPosts()
    return (
        <>
        <ul>{
            posts.map((post: IPost) => {
                return <div className="border border-gray-300 p-4 mb-3 w-fit rounded-md" key={post._id}>
                    <Link className="block text-xl font-bold" href={"/posts/" + post._id}>{post.title}</Link>
                    <p>{ post.content.slice(0, 63) }...</p>
                </div>
            })                 
        }</ul>
        </>
    )
}