import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogggedIn } from "./utils/auth";
export const ProtectedRooute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogggedIn()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/admin/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
