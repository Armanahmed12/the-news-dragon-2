import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const userDirection = useLocation();
    console.log(user);
     const isTrue = user == true;
     console.log(isTrue);
    
    if(loading){

          return <Spinner animation="border" variant="primary" />
    }
    
    if(!user){

        console.log("hllfdf");
     
             return <Navigate to="/logIn" state={{from: userDirection.pathname}}  replace></Navigate>;
     
    };
    console.log("before  return");
    return children;

};

export default PrivateRoute;