import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogPage(props) {

    const [blog, setBlog] = useState({})

    const { id } = useParams()

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/blogs/${id}`)
            console.log(response)
            setBlog(response.data)
        })
        ()
    })

    return (
        <div class = "container">
            <h1>{blog.title}</h1>
            <h6>{blog.description}</h6>
            <p>{blog.article}</p>
        </div>
    )


}

export default BlogPage