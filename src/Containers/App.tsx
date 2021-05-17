import React from 'react';
import './App.css';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./login/LoginPage";
import Logged from "./Logged";
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

function App() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/login" component={LoginPage}/>

                    <Route exact={true} path="/">
                        <Redirect to="/login"/>
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
