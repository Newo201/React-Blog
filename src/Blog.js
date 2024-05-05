import BlogRow from "./components/blog-row"
import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {

    const [blogInfo, setBlogInfo] = useState([{}])

    useEffect(() => {

        (async () => {
            const response = await axios.get("blogs/all")
            console.log(response)
            setBlogInfo(response.data)
        })
        
        ();
    }, [])

    return (
        <>
        <BlogRow blogList = {blogInfo}/>
        </>
    )
}

export default Blog