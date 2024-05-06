import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"

function BlogCard(props) {

  const navigate = useNavigate()

  function test(event) {
    console.log(event.target.id)
  }

  function editBlog(event) {
    const id = event.target.id
    navigate(`/blog/edit/${id}`)
  }

  return (
    <div className="col d-flex align-items-stretch">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button onClick = {test} id = {props.id} className = "mx-1" variant="primary">Read Blog</Button>
            <Button onClick = {editBlog} id = {props.id} className = "mx-1" variant="primary">Edit</Button>
            <Button id = {props.id} className = "mx-1" variant="primary">Delete</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default BlogCard;