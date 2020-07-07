import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './components/profile'
import HiringPage from './components/HiringPage';
import FrontPage from './components/FrontPage'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'


class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signUp" component={SignUpForm} />
                <Route exact path="/" component={FrontPage} />
                <Route exact path="/hiring" component={HiringPage} />
                <Route exact path="/profile" component={Profile} />
            </div>
        )
    }
}
export default App;
