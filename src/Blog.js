import BlogRow from "./components/blog-row"
import { useEffect, useState } from "react";
import axios from "axios";
import BlogFeatures from "./components/blog-features";
import BlogHeader from "./components/blog-header";
import BlogDropdown from "./components/blog-dropdown";

function Blog(props) {

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
        <BlogHeader />
        <BlogDropdown />
        <BlogFeatures view = {props.view} edit = {props.edit} delete = {props.delete} blogList = {blogInfo}/>
        </>
    )
}

export default Blog