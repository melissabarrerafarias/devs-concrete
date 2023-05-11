import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import Homepage from './pages/Home'; 
import Footer from './components/Footer'; 


function App() {
  return (
    <Router> 
      <div> 
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
