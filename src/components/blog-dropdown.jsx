import Dropdown from "react-bootstrap/Dropdown"

// Replace with database
const categories = ['Economics', 'Finance', 'Statistics']

function BlogDropdown() {
  return (
    <div className = "container py-3">
        <div className = "row">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter Blogs
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                {categories.map((category, index) => {
                    return (<Dropdown.Item key = {index} href="#/action-1">{category}</Dropdown.Item>)
                })}
            </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
  );
}

export default BlogDropdown
