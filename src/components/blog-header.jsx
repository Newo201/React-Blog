import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"

function BlogHeader() {

    const navigate = useNavigate()

    function createBlog() {
        navigate("/blog/new")
    }
    return (
        <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">   

            <main className="px-3 text-center">
                <h1>Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                <Button onClick = {createBlog} variant = "primary" size = "lg">Create Blog</Button>
                </p>
            </main>
        </div>
    )
    
}

export default BlogHeader