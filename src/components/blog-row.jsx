import React from "react"
import BlogCard from "./blog-card"

function BlogRow() {
    return (
        <section id = "blog">
            <div class="album py-5">
                <div class = "container">
                    <div class="row pt-lg-5">
                        <div class="col">
                        <h2 class="source-serif-4 blog-title">Featured Articles</h2>
                        <p class="lead text-muted text-font">Read about the latest articles I have written based on topics in economics, finance, statistics and more.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                </div>
            </div>
        </section>
    )
}

export default BlogRow