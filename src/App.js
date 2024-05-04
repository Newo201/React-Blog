import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blog';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/ >} />
        <Route path = "/blog" element = {<Blog/ >} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
