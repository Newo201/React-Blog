import BlogDescription from "./blog-description"
import BlogImg from "./blog-img"

function BlogFeature(props) {

    return (
        props.id % 2 ?
        <div className="row py-5 shadow">
            <BlogDescription title = {props.title} content = {props.content} />
            <BlogImg />
        </div> :
         <div className="row py-5 shadow">
         <BlogImg />
         <BlogDescription title = {props.title} content = {props.content} />
         
        </div>
    )
}

export default BlogFeature