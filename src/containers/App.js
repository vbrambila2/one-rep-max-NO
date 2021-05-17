import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import AddPage from './AddPage';
import HomePage from './HomePage';
import MovementPage from './MovementPage';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} ></Route>
                    <Route exact path="/movement/:id"component={MovementPage} ></Route>
                    <Route exact path="/add" component={AddPage} ></Route>
                </Switch>
            </Router>
        </div>
    )
};

export default App;