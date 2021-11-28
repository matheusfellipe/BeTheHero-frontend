import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';

export default function Routes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" component={<Logon/>} />
        </Routes>
        </BrowserRouter>
    );
}