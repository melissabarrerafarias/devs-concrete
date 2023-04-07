import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import Homepage from './pages/Home'; 


function App() {
  return (
    <Router> 
      <div> 
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
