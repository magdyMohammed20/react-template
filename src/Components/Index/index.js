import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from '../Navbar/index'
import Home from '../Home/index'
import Contact from '../Contact/index'
const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/contact' component={Contact} />
            </BrowserRouter>
        </div>
    );
};

export default Index;