import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../component/Loading/LoadingPage";

const PrivateRoute = ({ children }) => {

  const { loading, user } = useContext(AuthContext);


  const location = useLocation()
//   console.log(location)




  if (loading) {
    return <LoadingPage></LoadingPage>;
  } else if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
