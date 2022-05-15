import React from 'react'
import { useSelector } from 'react-redux'
import EditTable from './edittable.js'


const Edittablecontainer = () => {
    const posts = useSelector((state) => state.posts)

    return (
        <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {posts.map(posts => (
                    <EditTable userId={posts.userId} id={posts.id} title={posts.title} body={posts.body} key={posts.id} />
                ))}
            </tbody>
        </table>
    )
}

export default Edittablecontainer