import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import Domain from './pages/Domain';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/domain/:id" element={<Domain />} />
    </Routes>
    <Footer/>


    </React.Fragment>
  );
}

export default App;
