import React from "react"
import BlogCard from "./blog-card"

// Replace with a database
const bloginfo = [
    {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'},
    {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'},
    {'imgName': "crypto", 'title': 'Test', 'description': 'This is a test'}
]

function BlogRow() {
    return (
            <div className="container"> 
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {bloginfo.map((blog, index) => {
                        return <BlogCard key = {index} {...blog} />
                    })}
                </div>
            </div>
    )
}

export default BlogRow