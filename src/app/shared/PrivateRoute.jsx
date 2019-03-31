import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  userRole: userRole,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = JSON.parse(
        localStorage.getItem("guoli_groupon_user")
      );
      if (!currentUser) {
        return (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/`,
              state: { from: props.location }
            }}
          />
        );
      } else if (!currentUser[userRole]) {
        return (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/reject`,
              state: { from: props.location }
            }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
