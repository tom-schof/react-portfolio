import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

const App = () => {
  

    return(
    <div>
     <Navbar/>
     <About/>
     <Footer/>
     <Home/>
     <Parallax/>
     <Portfolio/>
     <Skills />
     </div>
    );
  
    
  };


export default App;
