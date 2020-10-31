import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";



function App() {
  return (
      <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/UserProfile" component={UserProfile} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
  );
}

export default App;
