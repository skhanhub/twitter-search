import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux"
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";



function App() {

  const error = useSelector((state: any) => state.getData.error)


  return (
      <Router>
          <NavBar />
          {error && <h3 style={{color: 'red', textAlign: 'center'}}>{error}</h3>}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/UserProfile/:id" component={UserProfile} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
  );
}

export default App;
