import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import BlogEntry from './components/blog-entry';
import BlogPage from './BlogPage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  function editBlog(id) {
    navigate(`/blog/edit/${id}`)
  }

  function viewBlog(id) {
    navigate(`/blog/${id}`)
  }

  function deleteBlog(id) {
    (async () => {
      await axios.delete(`/blogs/${id}`)
    })
    ()
    window.location.reload()
  }

  // console.log(blogInfo)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home view = {viewBlog} edit = {editBlog} delete = {deleteBlog} />} />
        <Route path = "/blog" element = {<Blog view = {viewBlog} edit = {editBlog} delete = {deleteBlog} />} />
        <Route path = "/blog/new" element = {<BlogEntry/>} />
        <Route path = "/blog/edit/:id" element = {<BlogEntry/>} />
        <Route path = "/blog/:id" element = {<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
