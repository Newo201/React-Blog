import Dropdown from "react-bootstrap/Dropdown"
import { useState } from "react";

// Replace with database
const categories = ['Economics', 'Finance', 'Statistics']

function BlogDropdown(props) {

  const [filter, setFilter] = useState('Filter Blogs')

  function handleChange(e) {
    const { id } = e.target
    setFilter(id)
    props.filterBlogs(id)
  }

  return (
    <div className = "container py-3">
        <div className = "row">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {filter}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item id ="All" onClick={handleChange}>All</Dropdown.Item>
                {categories.map((category, index) => {
                    return (<Dropdown.Item onClick={handleChange} id = {category} key = {index}>{category}</Dropdown.Item>)
                })}
            </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
  );
}

export default BlogDropdown
