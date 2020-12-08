import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LoginRedirect from './pages/LoginRedirect'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={LoginRedirect}/>
                <Route path="/logout" component={Logout}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;