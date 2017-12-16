import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import GuestRoute from './components/routes/GuestRoute'
import UserRoute from './components/routes/UserRoute'

const App = ({ location, isAuthenticated }) => (
    <div>
        <Route location={location} path="/" exact component={HomePage}/>
        <GuestRoute location={location} path="/signup" exact component={SignupPage} />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
        <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
    </div>
);

App.PropTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return{
        isAuthenticated: !!state.user.email
    };
}

export default connect(mapStateToProps)(App);
