import React from 'react';
import './global.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Logon from './pages/Logon';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<Logon/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
