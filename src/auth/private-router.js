import React from "react";
import {
Redirect,
  Route
} from "react-router-dom";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import fakeAuth from "./fake-auth"
export default function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }