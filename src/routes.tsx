import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Plan from './pages/Plan';
import Payment from './pages/Payment';
import Download from './pages/Download';
import Support from './pages/Support';
import MyAccount from './pages/MyAccount';
import MyPlan from './pages/MyPlan';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/register" component={CreateAccount} />
            <Route path="/login" component={Login} />
            <Route path="/choose-plan" component={Plan} />
            <Route path="/payment" component={Payment} />
            <Route path="/download" component={Download} />
            <Route path="/support" component={Support} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/my-plan" component={MyPlan} />
        </BrowserRouter>
    )
}

export default Routes;