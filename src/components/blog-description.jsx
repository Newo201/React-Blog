function BlogDescription(props) {
    return (
        <div className="col-md-9">
        <h2 className="featurette-heading">{props.title}</h2>
        <p className="lead">{props.description}</p>
        </div>
    )
}

export default BlogDescription