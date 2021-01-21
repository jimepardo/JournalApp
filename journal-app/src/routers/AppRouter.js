import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);

    return (
      <Router>
        <div>
          <Switch>
            
            <Route 
              exact path="/auth/login" 
              component={LoginScreen} 
              isAuthenticated={user.logged}
            />
  
            <Route 
              path="/auth/register" 
              component={ RegisterScreen }
              isAuthenticated={user.logged}
            />
            
          </Switch>
        </div>
      </Router>
    )
  }
