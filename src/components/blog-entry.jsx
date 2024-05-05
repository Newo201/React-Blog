import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Replace with database query
const categories = ["Economics", "Finance", "Statistics"]

function BlogEntry(props) {

  const { id } = useParams()

  const [isUpdate, setIsUpdate] = useState(false)

  const [blogInfo, setBlogInfo] = useState({
    "title": "", 
    "category": "", 
    "description": "", 
    "article": ""
  })

  useEffect(() => {

    (async () => {
      if (id) {
        const response = await axios.get(`/blogs/${id}`)
        console.log(response)
        setBlogInfo(response.data)
        setIsUpdate(true)
      }
    })
    
    ();

  }, [])

  async function addBlog() {
    console.log(blogInfo)
    const response = await axios.post("/blogs/new", blogInfo)
  }

  async function updateBlog() {
    console.log(blogInfo)
    const response = await axios.put(`/blogs/${id}`, blogInfo)
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
        <Form.Group className="mb-3" controlId="Blog article">
            <Form.Label>Blog article</Form.Label>
            <Form.Control onChange = {updateForm} name = "article" as="textarea" rows={10} value = {blogInfo.article}/>
        </Form.Group>
        </Form>
        {isUpdate ?<Button onClick = {updateBlog}>Update</Button> :<Button onClick = {addBlog}>Submit</Button> }
    </div>
  );
}

export default BlogEntry;