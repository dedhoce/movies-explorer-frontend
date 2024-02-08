import React , { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { LoggedInContext } from '../contexts/LoggedInContext';

const ProtectedRouteElement = ({ component: Component, ...props  }) => {
  /** подписываемся на контекст состояния Логина */
  const loggedIn = useContext(LoggedInContext)
  
  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement;