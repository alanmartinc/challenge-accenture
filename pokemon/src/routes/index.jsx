import React from 'react';

import {
    BrowserRouter, Routes, Route
} from "react-router-dom";

import Home from '../views/Home';
import Benefits from '../views/Benefits';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/benefits' element={<Benefits />} />
            </Routes>
        </BrowserRouter>
    );
}