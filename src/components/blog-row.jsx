import React from "react"
import BlogCard from "./blog-card"

function BlogRow() {
    return (
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                </div>
            </div>
    )
}

export default BlogRow