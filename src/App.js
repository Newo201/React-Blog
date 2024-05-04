import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import BlogRow from './components/blog-row';
import BlogTitle from './components/blog-title';


function App() {
  return (
    <div>
      <Navbar />
      <BlogTitle />
      <BlogRow />
      <Footer />
    </div>
  );
}

export default App;
