import React from "react"
import BlogCard from "./blog-card"



function BlogRow(props) {
    return (
            <div className="container"> 
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {props.blogList.map((blog, index) => {
                        return <BlogCard key = {index} {...blog} />
                    })}
                </div>
            </div>
    )
}

export default BlogRow