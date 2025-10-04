
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
// import Home from '../src/components/Navbar';
import Academy from './components/Academy/Academy.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/academy" element={<Academy />} />
      </Routes>
    </Router>
  );
}

export default App;