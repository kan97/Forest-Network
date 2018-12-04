import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home'
import Profile from '../components/userInfo/userInfo'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => (<Fragment><Navbar/><Home/></Fragment>)
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