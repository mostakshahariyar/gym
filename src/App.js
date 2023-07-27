import Home from '../src/component/Home/Home';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import Team from './component/Team/Team';
import Service from './component/Service/Service';
import Shop from './component/Shop/Shop';
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
