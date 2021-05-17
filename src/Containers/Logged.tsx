import React from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import MainPage from "./main/MainPage";
import LoginPage from "./login/LoginPage";


export default function Logged() {

    const { path } =  useRouteMatch()

    const PrivateRoute = ({children, ...rest}: any) => {
        return (
            <Route
                {...rest}
                render={ () => children }
            />
        );
    }


    return (
        <Router>
            <Switch>
                <PrivateRoute exact={true} path={path} component={LoginPage} />
                <PrivateRoute exact={true} path={`${path}/home`} component={MainPage}/>
            </Switch>
        </Router>
    )
}