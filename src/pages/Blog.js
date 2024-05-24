import BlogRow from "../components/blog-row";
import { useState, useEffect } from "react";
import BlogHeader from "../components/blog-header";
import BlogDropdown from "../components/blog-dropdown";
import axios from "axios";

function Blog(props) {

    // console.log("Hello")
    // console.log(props.allBlogs)

    const [filteredBlogs, setfilteredBlogs] = useState([{}])
    const [isFiltered, setIsFilterded] = useState(false)

    const [allBlogs, setAllBlogs] = useState([{}])

    //Return all of the blogs from the API
    useEffect(() => {
  
          (async () => {
              const response = await axios.get("/blogs/all")
              console.log(response)
              setAllBlogs(response.data)
          })
          
          ();
    }, [props.clicks])

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
        delete = {props.delete} blogList = {isFiltered ? filteredBlogs: allBlogs}/>
        </>
    )
}

export default Blog