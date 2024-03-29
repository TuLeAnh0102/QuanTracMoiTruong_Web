import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }){
    console.log(rest.path);
    console.log(localStorage.getItem('user'));
    return(
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            //check quyền menu ở đây
            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export default PrivateRoute;