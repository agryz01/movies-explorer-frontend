import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, ...props }) => {
  return (
    <Route>
      {
        () => props.loggedIn ? children : <Redirect to='/' replace/>
      }
    </Route>
  );
};