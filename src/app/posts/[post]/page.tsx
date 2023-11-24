import axios from "axios"
import IPost from "../../../types/Post"
import formatDistance from 'date-fns/formatDistance'
import { notFound } from 'next/navigation'

type GetPostResponse = { data: IPost }

async function getPost(id: string) {
    const res = await axios.get(`http://localhost:5173/api/posts/${id}`)
    if(!res.data) {
        throw new Error('Failed to fetch data')
        notFound()
    }
    return res.data
}

export default async function Post({ params }: { params: { post: string } }){
    const data = await getPost(params.post)
    return(
        <main>
            <h1 className="text-5xl font-extrabold">{ data.title }</h1>
            <p className="mb-5 mt-3 font-light">{ formatDistance(new Date(data.createdAt),new Date()) } ago</p>
            <p>{ data.content }</p>
            <hr className="mt-4 w-64 mb-4"></hr>
            <h1 className="text-xl font-bold">Comments</h1>
            <ul>
                    {data.comments.length > 0 ? (
                        //TODO: create new type for comment
                        data.comments.map((comment: any, index: number) => (
                            <div
                                key={index}
                                className="p-3 border border-gray-300 w-96 mt-4 rounded-lg"
                            >
                                <h1 className="font-bold">{comment.author}</h1>
                                <p>{comment.content}</p>
                            </div>
                        ))
                    ) : (
                        <h1>No Comments Yet</h1>
                    )}
                </ul>
        </main>
    )
}