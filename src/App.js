import React from 'react';
import './global.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<Logon/>} />
        <Route path = "/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
