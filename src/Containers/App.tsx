import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./login/LoginPage";
import Logged from "./Logged";


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact={true}
                           path="/login"
                           component={LoginPage}
                    />
                    <Route exact={true} path="/">
                        <Redirect to="/app"/>
                    </Route>

                    <Route path="/app">
                        <Logged />
                    </Route>

                </Switch>
            </Router>
        </div>

    );
}

export default App;
