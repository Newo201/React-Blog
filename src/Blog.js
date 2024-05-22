import BlogRow from "./components/blog-row"
import { useEffect, useState } from "react";
import axios from "axios";
import BlogHeader from "./components/blog-header";
import BlogDropdown from "./components/blog-dropdown";

function Blog(props) {

    const [filteredBlogs, setfilteredBlogs] = useState([{}])

    useEffect(() => {
        setfilteredBlogs(props.allBlogs)
    }, [])

    function filterBlogs(category) {
        if (category === "All") {
            return props.allBlogs
        } else {
        setfilteredBlogs(props.allBlogs.filter(blog => {return blog.category === category}))
        }
    }

    return (
        <>
        <BlogHeader />
        <BlogDropdown filterBlogs = {filterBlogs}/>
        <BlogRow featured = {true} view = {props.view} edit = {props.edit} 
        delete = {props.delete} blogList = {filteredBlogs}/>
        </>
    )
}

export default Blog