import BlogFeature from "./blog-feature"

function BlogFeatures(props) {

    return (
        <div className="container"> 
            {props.blogList.map((blog, index) => {
                return (<BlogFeature key = {index} {...blog} view = {props.view} edit = {props.edit} delete = {props.delete}/>)
            })}
        </div>
    )
}

export default BlogFeatures