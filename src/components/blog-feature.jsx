import BlogDescription from "./blog-description"
import BlogImg from "./blog-img"
import BlogButton from "./blog-button"

function BlogFeature(props) {

    const id = (props.id)

    return (
        
        <div className = "container my-3 shadow">
            {props.id % 2 ?  
            <div onClick = {() => {props.view(id)}} className="row py-5">
            <BlogDescription title = {props.title} description = {props.description} />
            <BlogImg url = {props.image}/>
            </div> :
            <div onClick = {() => {props.view(id)}} className="row text-end py-5">
            <BlogImg url = {props.image}/>
            <BlogDescription title = {props.title} description = {props.description} />
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