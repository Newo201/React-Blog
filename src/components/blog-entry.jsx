import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// Replace with database query
const categories = ["Economics", "Finance", "Statistics"]

function BlogEntry() {
  return (
    <div className = "container mt-5">
        <Form>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="title" placeholder="Blog Title" />
        </Form.Group>
        <Form.Group className = "mb-3" controlId = "Category">
            <Form.Label>Blog Category</Form.Label>
            {categories.map(category => {
                return (
                    <Form.Check // prettier-ignore
                    type="radio"
                    name = "categories"
                    id={category}
                    label={category}
                    />
                )
            })}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog Description">
            <Form.Label>Blog Description</Form.Label>
            <Form.Control type = "Blog Description" as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Blog Content">
            <Form.Label>Blog Content</Form.Label>
            <Form.Control type = "Blog Content" as="textarea" rows={10} />
        </Form.Group>
        </Form>
        <Button>Submit</Button>
    </div>
  );
}

export default BlogEntry;