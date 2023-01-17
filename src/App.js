import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthDetails from "./firebase/Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
        </div>
      </Router>
    
  );
};

export default App;
