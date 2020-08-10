import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Pages/Home'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import NotFound from './Pages/NotFound'

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/pagina1" component={Page1} />
                <Route path="/pagina2" component={Page2} />
                <Route path="/pagina3" component={Page3} />
                <Route path="/pagina4" component={Page4} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )

}