import BlogRow from "./components/blog-row"
import { useEffect, useState } from "react";
import axios from "axios";
import BlogHeader from "./components/blog-header";
import BlogDropdown from "./components/blog-dropdown";

function Blog(props) {

    // useEffect(() => {

    //     (async () => {
    //         const response = await axios.get("blogs/all")
    //         console.log(response)
    //         setBlogInfo(response.data)
    //     })
        
    //     ();
    // }, [])

    return (
        <>
        <BlogHeader />
        <BlogDropdown />
        <BlogRow featured = {true} view = {props.view} edit = {props.edit} 
        delete = {props.delete} blogList = {props.allBlogs}/>
        </>
    )
}

export default Blog