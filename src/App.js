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

  //Return all of the blogs from the API
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

  const navigateEdit = useNavigate()
  const navigateView = useNavigate()


  function editBlog(id) {
    navigateEdit(`/blog/edit/${id}`)
  }

  function viewBlog(id) {
    navigateView(`/blog/${id}`, {exact: true})
  }

  function deleteBlog(id) {
    (async () => {
      await axios.delete(`/blogs/${id}`)
    })
    ()
    setAllBlogs(prevBlogs => { 
      return prevBlogs.filter(blog => blog.id !== id)
    })
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home view = {viewBlog} edit = {editBlog} delete = {deleteBlog} allBlogs = {allBlogs}/>} />
        <Route path = "/blog" element = {<Blog view = {viewBlog} edit = {editBlog} delete = {deleteBlog} allBlogs = {allBlogs}/>} />
        <Route path = "/blog/new" element = {<BlogEntry allBlogs = {allBlogs}/>} />
        <Route path = "/blog/:id" element = {<BlogPage />} />
        <Route path = "/blog/edit/:id" element = {<BlogEntry allBlogs = {allBlogs}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
