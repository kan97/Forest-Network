import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/home';
import Login from '../containers/login';
import Signup from '../containers/signup';
import Explore from '../containers/explore';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Explore />
    },
    {
        path: '/user/:username',
        exact: true,
        main: ({match}) => <Home userKey={match.params.username} />
    },
    {
        path: '/userid/:userId',
        exact: true,
        main: ({match}) => <Home userId={match.params.userId} />
    },
    {
        path: '/mypage',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/signup',
        exact: false,
        main: () => <Signup />
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