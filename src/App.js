import React from "react";
import { Switch,BrowserRouter as Router,Redirect,Route } from "react-router-dom";
import ReactAppContainerDemo from "./pages/reactAppContainerDemo";
import './css/normalize.css';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
            <Route  path={process.env.PUBLIC_URL +"/react-app-container"}>
                <ReactAppContainerDemo />
            </Route>
            <Redirect from='*' to={process.env.PUBLIC_URL +'/react-app-container'} />
        </Switch>      
    </Router>
  );
}

export default App;
