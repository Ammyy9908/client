import './App.css';
import './W3.css';
import React from 'react'
import Main from './components/Main';
import Details from './components/Details';
import LoginCribwise from './components/LoginCribwise';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from './components/FrontPage';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (     
    <Router>
      <Header/>
      <Routes>
          <Route exact path="/" element={<FrontPage/>} />
          <Route exact path="/login" element={<LoginCribwise />} />
          <Route exact path="/details" element={<Details />} />
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
