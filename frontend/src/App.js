import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import Domain from './pages/Domain';
import Profile from './pages/Profile'
import {Routes,Route} from 'react-router-dom';
import Projects from './pages/Projects';
import Events from './pages/Events';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/domain/:id" element={<Domain />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/projects/:id" element={<Projects />}/>
      <Route path='/events/:id' element={<Events/>}/>
    </Routes>
    <Footer/>


    </React.Fragment>
  );
}

export default App;
