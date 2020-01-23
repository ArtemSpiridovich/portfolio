import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/main/Main";
import Skills from "./components/Myskills/Skills";
import Projects from "./components/Myproject/Projects";
import Freelance from "./components/Freelance/Freelance";
import Contacts from "./components/ContactMe/Contacts";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
          {/*<Header/>*/}
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
          {/*<Freelance/>*/}
          <Contacts/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
