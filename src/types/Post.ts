interface IPost {
    _id?: string,
    title: string,
    content: string,
    comments?: object[]
}

export default IPost