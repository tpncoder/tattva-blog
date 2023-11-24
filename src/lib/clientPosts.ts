import { MongoClient } from "mongodb";

const uriPosts: string = process.env.MONGO_URI_OFFLINE_P as string
const uriUsers: string = process.env.MONGO_URI_OFFLINE_U as string

export const clientUser = new MongoClient(uriUsers);
export const clientPosts = new MongoClient(uriPosts);