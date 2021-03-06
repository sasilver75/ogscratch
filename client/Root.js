import React from 'react';
import { Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'; // removed Switch, Redirect
import { Provider } from 'react-redux';
import Signin from './components/Signin';
import Main from './containers/MainContainer';
import Home from './components/Home';
import Signup from './components/Signup';
import store from './store';
import Logout from './components/Logout';


//IMPORTANT - any new components added that will be displayed upon rerouting, must make route here first. Follow pattern below. 
const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            {/* <Route path='/' component={Main} /> */}
            <Route exact path='/' component={Signin} />
            <Route path='/home' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/logout' component={Logout} />
        </Router>
    </Provider>
)

export default Root;