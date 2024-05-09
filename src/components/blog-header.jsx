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
                <h1>Blog Posts</h1>
                <p className="lead">I love writing about different topics ranging from Economics and Finance to Statistics and more. 
                If you want to add your own post, click the button below.</p>
                <p className="lead">
                <Button onClick = {createBlog} variant = "primary" size = "lg">Create Blog</Button>
                </p>
            </main>
        </div>
    )
    
}

export default BlogHeader