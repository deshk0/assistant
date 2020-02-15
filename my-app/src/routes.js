import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return(
            <Switch>
                <Route path="/Links" exact>
                    <LinksPage />
                </Route>
                <Route path="/Create" exact>
                    <CreatePage />
                </Route>
                <Route path="/Detail/:id" exact>
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}