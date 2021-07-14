import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import { isLogggedIn } from "./utils/auth";
import { useStyles } from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const classes = useStyles();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogggedIn()) {
          return (
            <>
              <AdminPage>
                <Component {...props} />
              </AdminPage>
            </>
          );
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
