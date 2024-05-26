function BlogImg(props) {

    console.log(props.url)
    return (
        <div className="col-md-3">
        <img src = {props.url}/>
        </div>
    )
}

export default BlogImg