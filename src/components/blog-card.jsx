import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard(props) {

  function test(event) {
    console.log(event.target.id)
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
            <Button id = {props.id} className = "mx-1" variant="primary">Edit</Button>
            <Button id = {props.id} className = "mx-1" variant="primary">Delete</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default BlogCard;