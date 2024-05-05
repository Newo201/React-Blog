import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard(props) {
  return (
    <div className="col d-flex align-items-stretch">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button className = "mx-1" variant="primary">Read Blog</Button>
            <Button className = "mx-1" variant="primary">Edit</Button>
            <Button className = "mx-1" variant="primary">Delete</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default BlogCard;