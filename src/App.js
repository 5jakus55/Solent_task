import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AuthDetails from "./firebase/Auth";

const App = () => {
  return (
    <AuthDetails>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthDetails>
    
  );
};

export default App;
