import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import BlogEntry from './components/blog-entry';
import BlogPage from './BlogPage';

function App() {

  // console.log(blogInfo)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/ >} />
        <Route path = "/blog" element = {<Blog/ >} />
        <Route path = "/blog/new" element = {<BlogEntry/>} />
        <Route path = "/blog/edit/:id" element = {<BlogEntry/>} />
        <Route path = "/blog/:id" element = {<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
