import BlogFeature from "./blog-feature"

function BlogFeatures(props) {

    return (
        <div className="container"> 
            {props.blogList.map((blog, index) => {
                return (<BlogFeature key = {index} {...blog} />)
            })}
        </div>
    )
}

export default BlogFeatures