import React from "react"
import BlogCard from "./blog-card"

const bloginfo = [
    {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'},
    {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'},
    {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'}
]

function BlogRow() {
    return (
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {bloginfo.map(blog => {
                        return <BlogCard {...blog} />
                    })}
                </div>
            </div>
    )
}

export default BlogRow