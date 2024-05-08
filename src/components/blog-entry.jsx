import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import BlogCategories from './blog-categories';

// Replace with database query
const categories = ["Economics", "Finance", "Statistics"]

function BlogEntry() {

  const navigate = useNavigate()

  const { id } = useParams()

  const [isUpdate, setIsUpdate] = useState(false)

  const [blogInfo, setBlogInfo] = useState({
    "title": "", 
    "cat_id": 0,
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

  }, [id])

  async function addBlog() {
    console.log(blogInfo)
    await axios.post("/blogs/new", blogInfo)
    navigate("/")
  }

  async function updateBlog() {
    console.log(blogInfo)
    await axios.put(`/blogs/${id}`, blogInfo)
    navigate(-1)
  }

  function updateForm(event) {
    const {name, value} = event.target
    console.log(name)
    setBlogInfo(prevValue => {
        return ({...prevValue, [name]: value})
    })
  }

  console.log(blogInfo.cat_id)

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
            <Form.Control onChange = {updateForm} name="image" placeholder="Copy the image URL from the browser" value = {blogInfo.img}/>
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
        {isUpdate ?<Button onClick = {updateBlog}>Update</Button> :<Button onClick = {addBlog}>Submit</Button> }
    </div>
  );
}

export default BlogEntry;