import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import BlogCategories from './blog-categories';

// Replace with database query
const categories = ["Economics", "Finance", "Statistics"]

function BlogEntry(props) {

  const [blog, setBlog] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      if(id) {
        const response = await axios.get(`/blogs/${id}`)
        console.log(response)
        setBlog(response.data)
      }
    })
    ()
  }, [id])

  
  //ToDo: add error catching if the user does not enter a category
  function addBlog() {

    (async () => {
      try {

        const response = await axios.post("/blogs/new", blog)
        console.log(response)
        console.log('redirecting')
      } catch (err) {
        console.log(err)
      }
    }) ()
    navigate(-1, {replace: true})
    
  }

  function updateBlog() {
    (async () => {
      try {
        const response = await axios.put(`/blogs/${id}`, blog)
        console.log(response)
        console.log('redirecting')
      } catch (err) {
        console.log(err)
      }
    })()
    navigate(-1, {replace: true})
    
  }

  function updateForm(event) {
    const {name, value, files} = event.target
    console.log(files)
    setBlog(prevValue => {
        return ({...prevValue, [name]: value})
    })
  }

  console.log(blog)


  return (

    <div className = "container mt-5">
        <Form>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control onChange = {updateForm} name="title" placeholder="Blog Title" value = {blog.title}/>
        </Form.Group>
        <Form.Group className = "mb-3" controlId = "Category">
        <Form.Label>Blog Category</Form.Label>
        {categories.map((category, index) => {
            return (
                <Form.Check // prettier-ignore
                key = {index}
                onChange = {updateForm}
                type="radio"
                name = "category"
                value={category}
                label={category}
                // isValid = {blogInfo.cat_id === 2}
                checked = {blog.category === category}
                />
            )
        })}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Blog Image</Form.Label>
          <Form.Control type = "text" name = "image" placeholder = "Enter Image URL" onChange = {updateForm} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog Description">
            <Form.Label>Blog Description</Form.Label>
            <Form.Control onChange = {updateForm} name = "description" as="textarea" rows={3} value = {blog.description}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog article">
            <Form.Label>Blog Article</Form.Label>
            <Form.Control onChange = {updateForm} name = "article" as="textarea" rows={10} value = {blog.article}/>
        </Form.Group>
        </Form>
        {parseInt(id) ?<Button onClick = {updateBlog}>Update</Button> :<Button onClick = {addBlog}>Submit</Button> }
    </div>
  );
}

export default BlogEntry;