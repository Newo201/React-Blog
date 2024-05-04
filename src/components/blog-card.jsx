import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard(props) {
  return (
    <div class="col d-flex align-items-stretch">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../images/${props.imgName}.jpg`)} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default BlogCard;