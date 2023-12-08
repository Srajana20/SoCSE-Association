import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Nav'
import Literature from './modules/Literature';



function App(){
  return(
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/Literature" element={<Literature />} />
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
