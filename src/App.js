import Home from '../src/component/Home/Home';
import {BrowserRouter as Router,
Routes, Route
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </Router>
  );
}

export default App;
