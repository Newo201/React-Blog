import React from "react"
import BlogCard from "./blog-card"

const basePath = 'C:/Users/owenj/OneDrive/Programming/Web Design/2024/React/react-blog/react-blog-frontend/public/assets/images'
const bloginfo = [{'imgURL': `${basePath}/behavioural.jpg`, 'title': 'Test', 'description': 'This is a test'},
{'imgURL': `${basePath}/crypto.jpg`, 'title': 'Test', 'description': 'This is a test'},
{'imgURL': `${basePath}/crypto.jpg`, 'title': 'Test', 'description': 'This is a test'}
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