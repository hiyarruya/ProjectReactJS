import { React } from 'react'
import { Redirect, Switch, Route, Router } from 'react-router-dom'
import RouteGuard from './component/RouteGuard'

import History from './helpers/History'
import Login from './pages/Login'
import Table from './component/Table'

function Routes() {
    return (
        <Router History = {History}>
            <Switch>
                <RouteGuard exact path='/' Component={Table} />
                <Route path='/login' Component={Login} />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default Routes