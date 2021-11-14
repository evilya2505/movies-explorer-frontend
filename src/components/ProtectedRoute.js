import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.loggedIn)
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : window.location.href = '/'
      }
    </Route>
  );
};

export default ProtectedRoute;