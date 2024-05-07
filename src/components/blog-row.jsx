import React from "react"
import BlogCard from "./blog-card"
import BlogFeature from "./blog-feature"



function BlogRow(props) {

    return (
            <div className="container"> 
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {props.blogList.map((blog, index) => {
                        return (props.featured ? 
                        <BlogFeature key = {index} {...blog} /> : 
                        <BlogCard key = {index} {...blog} view = {props.view} edit = {props.edit} delete = {props.delete}/>)
                    })}
                </div>
            </div>
    )
}

export default BlogRow