import React from "react";
import { Form } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// create a wrapper for the current route
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...rest} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
