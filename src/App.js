// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Home';
import Blog from './Blog';
import BlogEntry from './components/blog-entry';
import BlogPage from './BlogPage';
import { useState, useEffect } from 'react';

// Imports
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const [allBlogs, setAllBlogs] = useState([{}])
  const [deleteClicks, setDeleteClicks] = useState(0)

  // //Return all of the blogs from the API
  useEffect(() => {

        (async () => {
            const response = await axios.get("/blogs/all")
            console.log(response)
            setAllBlogs(response.data)
        })
        
        ();
  }, [])

  //Logic for editing, viewing and deleting blogs
  //ToDo: make these functions into a useReducer Hook

  const navigate = useNavigate()

  function editBlog(id) {
    navigate(`/blog/edit/${id}`)
  }

  function viewBlog(id) {
    navigate(`/blog/${id}`, {exact: true})
  }

  function deleteBlog(id, setBlogState) {
    (async () => {
      await axios.delete(`/blogs/${id}`)
    })
    ()
    setDeleteClicks(prevCount => prevCount + 1)
    // setBlogState(prevBlogs => { 
    //   return prevBlogs.filter(blog => blog.id !== id)
    // })
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home view = {viewBlog} edit = {editBlog} delete = {deleteBlog} clicks = {deleteClicks}/>} />
        <Route path = "/blog" element = {<Blog view = {viewBlog} edit = {editBlog} delete = {deleteBlog} clicks = {deleteClicks}/>} />
        <Route path = "/blog/new" element = {<BlogEntry/>} />
        <Route path = "/blog/:id" element = {<BlogPage />} />
        <Route path = "/blog/edit/:id" element = {<BlogEntry/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
