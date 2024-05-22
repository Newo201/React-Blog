import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogPage(props) {

    const [blog, setBlog] = useState({})
    const { id } = useParams()

    // Can probably remove this get request 
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/blogs/${id}`)
            console.log(response)
            setBlog(response.data)
        })
        ()
    })

    return (
        <div className = "container py-5">
            <h1 className = "my-3">{blog.title}</h1>
            <h6 className = "my-3">{blog.description}</h6>
            <p className = "my-3">{blog.article}</p>
        </div>
    )
}

export default BlogPage