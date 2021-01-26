import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
  
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged( async(user) => {
          if (user?.uid){
            dispatch(login(user.uid, user.displayName));
            setIsLoggedIn(true);
            dispatch( startLoadingNotes( user.uid));
            
          }else{
            setIsLoggedIn(false);
          }
          setChecking(false);
      }); 
  }, [dispatch, setChecking,setIsLoggedIn])

  if (checking){
    return (
      <h1 className="icono-loading">
        <span className="loading style-3">       
        </span>
      </h1>
    )
  }

    return (
      <Router>
        <div>
          <Switch>
            
            <PublicRoute 
              isAuthenticated={isLoggedIn}
              path="/auth" 
              component={ AuthRouter } 
              
            />

            <PrivateRoute 
              isAuthenticated={isLoggedIn}
              path="/" 
              component={ JournalScreen }
              
            />
            
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    )
  }
