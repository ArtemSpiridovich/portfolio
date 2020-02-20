import React from 'react';
import './App.css';
import Main from "./components/main/Main";
import Skills from "./components/Myskills/Skills";
import Projects from "./components/Myproject/Projects";
import Contacts from "./components/ContactMe/Contacts";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
          <Contacts/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
