import React from 'react';
import './App.css';

import Home from './pages/Home';
import Apts from './pages/Apts';
import SingleApt from './pages/SingleApt';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './scrollTop'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/apts' exact component={Apts} />
        <Route path='/apts/:id' component={SingleApt} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
