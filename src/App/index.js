import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import './style.css';

import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';

class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                        <Link to="/">Home</Link>
                    </header>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }

};

export default App;