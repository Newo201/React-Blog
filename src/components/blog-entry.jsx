import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import axios from 'axios';

// Replace with database query
const categories = ["Economics", "Finance", "Statistics"]

function BlogEntry() {

  const [blogInfo, setBlogInfo] = useState({
    "title": "", 
    "category": "", 
    "description": "", 
    "content": ""
  })

  async function addBlog() {
    console.log(blogInfo)
    const response = await axios.post("/blogs/new", blogInfo)
  }

  function updateForm(event) {
    const {name, value} = event.target
    setBlogInfo(prevValue => {
        return ({...prevValue, [name]: value})
        // if (name === 'categories') {
        //     return ({...prevValue, "category"})
        // } else {
        //     return ({...prevValue, [name]: value})
        // }
        
    })
  }

  return (
    <div className = "container mt-5">
        <Form>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Email address</Form.Label>
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
                    />
                )
            })}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog Description">
            <Form.Label>Blog Description</Form.Label>
            <Form.Control onChange = {updateForm} name = "description" as="textarea" rows={3} value = {blogInfo.description}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog Content">
            <Form.Label>Blog Content</Form.Label>
            <Form.Control onChange = {updateForm} name = "content" as="textarea" rows={10} value = {blogInfo.content}/>
        </Form.Group>
        </Form>
        <Button onClick = {addBlog}>Submit</Button>
    </div>
  );
}

export default BlogEntry;