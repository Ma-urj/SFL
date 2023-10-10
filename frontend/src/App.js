import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Menu from './components/Menu';
import Register from './components/Register';
import Terms from './components/Terms';
import Home from './components/Home';
import Players from './components/Players';
import Fixtures from './components/Fixtures';
import Footer from './components/Footer';
import Stands from './components/Stands';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <div>
          <Routes>
            <Route path="/players" element={<Players />}/>
            <Route path="/t&c" element={<Terms/>}/>
            <Route path="/stands" element={<Stands />}/>
            <Route path="/fixtures" element={<Fixtures />}/>
            <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

