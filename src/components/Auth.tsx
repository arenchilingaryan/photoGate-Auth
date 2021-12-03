import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Ass from './Ass';
import Shit from './Shit';

const Auth = () => {
  return (
    <BrowserRouter basename="/auth">
      <div className="div" style={{ fontSize: '100px' }}>
        AUTH
        <Link to="/ass">To ass</Link>
        <Link to="/shit">To shit</Link>
        <Route path="/ass" component={Ass} />
        <Route path="/shit" component={Shit} />
      </div>
    </BrowserRouter>
  );
};

export default Auth;
