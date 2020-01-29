import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PersonalDetails from './components/personaldetails'
import TakeSurvey from './components/takesurvey'
import ViewResults from "./components/viewresults"

function App() {
  return (
    <Router>
      <Switch>
      <div >

      <Route exact path="/"  component={TakeSurvey}>
      
          </Route>

          <Route path="/PersonalDetails">
          <PersonalDetails/>
          </Route>

          <Route path="/ViewResults">
            <ViewResults/>
          </Route>
       
        
      </div>
      </Switch>
    </Router>


  );
}

export default App;
