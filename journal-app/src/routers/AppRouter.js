import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
   

    return (
      <Router>
        <div>
          <Switch>
            
            <Route 
              exact path="/auth/login" 
              component={LoginScreen} 
              
            />

            <Route 
              path="/auth/register" 
              component={ RegisterScreen }
              
            />

            <Route 
              path="/" 
              component={ JournalScreen }
              
            />
            
          </Switch>
        </div>
      </Router>
    )
  }
