import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from './context/MyContext';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> }/>
          <Route path="/projects" element={ <Projects/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;