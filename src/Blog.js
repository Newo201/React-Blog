import BlogRow from "./components/blog-row"
import { useState } from "react";
import BlogHeader from "./components/blog-header";
import BlogDropdown from "./components/blog-dropdown";

function Blog(props) {

    console.log("Hello")
    console.log(props.allBlogs)

    const [filteredBlogs, setfilteredBlogs] = useState([{}])
    const [isFiltered, setIsFilterded] = useState(false)

    // useEffect(() => {
    //     setfilteredBlogs(props.allBlogs)
    // })

    function filterBlogs(category) {
        if (category === "All") {
            setIsFilterded(false)
        } else {
            setIsFilterded(true)
            setfilteredBlogs(props.allBlogs.filter(blog => {return blog.category === category}))
        }
    }

    return (
        <>
        <BlogHeader />
        <BlogDropdown filterBlogs = {filterBlogs}/>
        <BlogRow featured = {true} view = {props.view} edit = {props.edit} 
        delete = {props.delete} blogList = {isFiltered ? filteredBlogs: props.allBlogs}/>
        </>
    )
}

export default Blog