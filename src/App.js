import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import BlogRow from './components/blog-row';


function App() {
  return (
    <div>
      <Navbar />
      <BlogRow />
      <Footer />
    </div>
  );
}

export default App;
