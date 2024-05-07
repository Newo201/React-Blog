import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import BlogButton from "./blog-button";

function BlogCard(props) {

  const id = props.id
  // const navigate = useNavigate()

  // function editBlog(event) {
  //   const id = event.target.id
  //   navigate(`/blog/edit/${id}`)
  // }

  // function viewBlog(event) {
  //   const id = event.target.id
  //   navigate(`/blog/${id}`)
  // }

  // function deleteBlog(event) {
  //   (async () => {
  //     await axios.delete(`/blogs/${event.target.id}`)
  //   })
  //   ()
  //   window.location.reload()
  // }

  return (
    <div className="col d-flex align-items-stretch">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <BlogButton action = {props.view} id = {props.id} name = "View" />
            <BlogButton action = {props.edit} id = {props.id} name = "Edit" />
            <BlogButton action = {props.delete} id = {props.id} name = "Delete" />
        </Card.Body>
        </Card>
    </div>
  );
}

export default BlogCard;