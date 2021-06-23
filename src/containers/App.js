import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import AddPage from './AddPage';
import HomePage from './HomePage';
import MovementPage from './MovementPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history} basename={window.location.pathname || ''}>
                    <Switch>
                        <Route exact path="/" render={ () => <HomePage title="One Rep - Home" /> } ></Route>
                        <Route exact path="/movement/:name/:weight" render={ () => <MovementPage title="One Rep - Movement" /> } ></Route>
                        <Route exact path="/add" render={ () => <AddPage title="One Rep - Add" /> } ></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
};

export default App;