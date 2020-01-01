import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
          <Header/>
          <Main/>
          <Skills/>
          <Projects/>
          <Freelance/>
          <Contacts/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
