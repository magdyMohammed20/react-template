import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from '../Navbar/index'
import Home from '../Home/index'
import Work from '../Work/index'
import Portofolio from '../Portofolio/index'
import Profile from '../Profile/index'
import About from '../About/index'
import Contact from '../Contact/index'
const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/work' component={Work} />
                <Route path='/portofolio' component={Portofolio} />
                <Route path='/resume' component={Profile} />
                <Route path='/about' component={About} />
            </BrowserRouter>
        </div>
    );
};

export default Index;