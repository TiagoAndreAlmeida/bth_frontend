import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/registro' component={Register} />
                <Route path='/perfil' component={Profile} />
                <Route path='/incidente/novo' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;