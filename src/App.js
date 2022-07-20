
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Jobs from './Pages/Jobs';
import Contacts from './Pages/Contacts';
import Error from './Pages/Error';


function App() {
  return (
    <Router>
      <div class="x2">
        <nav>
          <Link to='/' > HOME&nbsp;&nbsp;&nbsp;</Link>{"     "}
          <Link to='/About'> ABOUT-US&nbsp;&nbsp;&nbsp;</Link>   {"     "}
          <Link to='/Jobs'> JOBS&nbsp;&nbsp;&nbsp;</Link>  {"    "}
          <Link to='/Contacts'>  CONTACT</Link>   {"    "}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}



export default App;
