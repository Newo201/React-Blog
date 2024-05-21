import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState, useMemo } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import BlogCategories from './blog-categories';

// Replace with database query
const categories = ["Economics", "Finance", "Statistics"]

function BlogEntry(props) {

  const navigate = useNavigate()
  const { id } = useParams()

  //Return the blog which matches the current id
  const [blogInfo, setBlogInfo] = useState(() => {
    const backendBlog = props.allBlogs.filter(blog => parseInt(blog.id) === parseInt(id))[0]
    //ToDo: clean up this code
    if (backendBlog) {
      return {...backendBlog, 'category': categories[backendBlog.cat_id - 1]}
    }
    else {
      return [{}]
    }
  })

  console.log(blogInfo)

  //Adds a blog to the database
  //ToDo: figure out why the submit is not redirecting the user
  //ToDo: add error catching if the user does not enter a category
  function addBlog() {
    (async () => {
      try {
        const response = await axios.post("/blogs/new", blogInfo)
        console.log(response)
        console.log('redirecting')
        navigate(-1, {replace: true})
      } catch (err) {
        console.log(err)
        navigate(-1, {replace: true})
      }
    }) ()
    
  }

  function updateBlog() {
    (async () => {
      try {
        const response = await axios.put(`/blogs/${id}`, blogInfo)
        console.log(response)
        console.log('redirecting')
        navigate(-1, {replace: true})
      } catch (err) {
        console.log(err)
      }
    })()
    
  }

  function updateForm(event) {
    const {name, value} = event.target
    setBlogInfo(prevValue => {
        return ({...prevValue, [name]: value})
    })
  }


  return (
    <div className = "container mt-5">
        <Form>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control onChange = {updateForm} name="title" placeholder="Blog Title" value = {blogInfo.title}/>
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
                checked = {blogInfo.category === category}
                />
            )
        })}
        </Form.Group>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Blog Image</Form.Label>
            <Form.Control onChange = {updateForm} name="image" placeholder="Copy the image URL from the browser" value = {blogInfo.image}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog Description">
            <Form.Label>Blog Description</Form.Label>
            <Form.Control onChange = {updateForm} name = "description" as="textarea" rows={3} value = {blogInfo.description}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog article">
            <Form.Label>Blog Article</Form.Label>
            <Form.Control onChange = {updateForm} name = "article" as="textarea" rows={10} value = {blogInfo.article}/>
        </Form.Group>
        </Form>
        {parseInt(id) ?<Button onClick = {updateBlog}>Update</Button> :<Button onClick = {addBlog}>Submit</Button> }
    </div>
  );
}

export default BlogEntry;