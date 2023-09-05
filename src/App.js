import Home from '../src/component/Home/Home';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import Service from './component/Service/Service';
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import Details from './component/Details/Details';
import Teams from './component/Teams/Teams';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path='/details' element={<Details/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
