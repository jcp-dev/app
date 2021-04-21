import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';

import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login, logout } from '../actions/authActions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomeRouter from './HomeRouter';

import { startLoadingEmployees } from '../actions/employeesActions';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(async (user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingEmployees())

      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    })


    return () => {
      dispatch(logout());
      setIsLoggedIn(false);
    }

  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <h1>Waiit..</h1>
    )
  }



  return (
    <Router>
      <div>
        <Switch>

          <PublicRoute isLoggedIn={isLoggedIn} exact path="/login" component={AuthRouter} />
          <PrivateRoute isLoggedIn={isLoggedIn} path="/" component={HomeRouter} />

          <Redirect to="/login" />

        </Switch>
      </div>
    </Router>
  )
}
