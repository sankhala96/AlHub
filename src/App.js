import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage'
import LoginPage from './components/pages/LoginPage'

const App = () => (
    <div>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/login" exact component={LoginPage} />
    </div>
);

export default App;
