import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Home';
import Hero from './components/hero';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
