import React from 'react';
import { Routes, Route } from 'react-router-dom';

function MyRoutes() {
    return (
        <Routes>
            <Route path="/"></Route>
            <Route path="/portfolio"></Route>
            <Route path="/contact"></Route>
            <Route path="/resume"></Route>
        </Routes>
    );
};

export default MyRoutes;