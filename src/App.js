import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import BlogRow from './components/blog-row';
import BlogTitle from './components/blog-title';
import Hero from './components/hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogTitle />
      <BlogRow />
      <Footer />
    </>
  );
}

export default App;
