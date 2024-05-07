import BlogDescription from "./blog-description"
import BlogImg from "./blog-img"
import BlogButton from "./blog-button"

function BlogFeature(props) {

    return (
        
        <div className = "container my-3 shadow">
            {props.id % 2 ?  
            <div className="row py-5">
            <BlogDescription title = {props.title} content = {props.content} />
            <BlogImg />
            </div> :
            <div className="row py-5">
            <BlogImg />
            <BlogDescription title = {props.title} content = {props.content} />
            </div>
            }
        <div className = "pb-3">
            <BlogButton action = {props.view} id = {props.id} name = "View" />
            <BlogButton action = {props.edit} id = {props.id} name = "Edit" />
            <BlogButton action = {props.delete} id = {props.id} name = "Delete" />
        </div>
        </div>
    )
}

export default BlogFeature