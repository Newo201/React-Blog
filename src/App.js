// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import BlogEntry from './pages/BlogEntry';
// Imports
import { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const [deleteClicks, setDeleteClicks] = useState(0)

  const navigate = useNavigate()

  function editBlog(id) {
    navigate(`/blog/edit/${id}`)
  }

  function viewBlog(id) {
    navigate(`/blog/${id}`, {exact: true})
  }

  function deleteBlog(id) {
    (async () => {
      await axios.delete(`/blogs/${id}`)
    })
    ()
    setDeleteClicks(prevCount => prevCount + 1)
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
