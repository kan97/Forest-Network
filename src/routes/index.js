import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/home'
import Profile from '../components/userInfo/userInfo'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/profile',
        exact: false,
        main: () => <Profile />
    }
]

export const showContentMenus = () => {
    var result = null
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main} 
                />
            )
        })
    }
    return <Switch>{result}</Switch>
}